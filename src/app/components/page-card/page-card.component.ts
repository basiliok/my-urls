import { Component, ElementRef, Input, Renderer2, Type, viewChild, ViewContainerRef } from '@angular/core';
import { SvgFirebaseComponent } from '../../svg/svg-firebase/svg-firebase.component';
import { SvgGithubComponent } from '../../svg/svg-github/svg-github.component';
import { SvgDefaultComponent } from '../../svg/svg-default/svg-default.component';
import { SvgGoogleAnalyticsComponent } from '../../svg/svg-google-analytics/svg-google-analytics.component';
import { SvgYoutubeComponent } from '../../svg/svg-youtube/svg-youtube.component';

interface PageCard {
  label: string;
  url: string;
  animatedIcon?: string;
  staticIcon?: string;
}

@Component({
  selector: 'app-page-card',
  standalone: true,
  imports: [],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.css',
})
export class PageCardComponent {
  @Input() inputPageCard: PageCard = { label: 'Mi pagina', url: 'https://www.google.co.uk/', staticIcon: 'default' };

  vcr = viewChild.required('container', { read: ViewContainerRef });
  imageTag = viewChild.required('imageTag', { read: ElementRef });

  cleanUrl: string = '';

  private componentMap: { [key: string]: Type<any> } = {
    firebase: SvgFirebaseComponent,
    googleanalytics: SvgGoogleAnalyticsComponent,
    github: SvgGithubComponent,
    default: SvgDefaultComponent,
    youtube: SvgYoutubeComponent,
  };

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.createSvgIcon();
    this.cleanUrl = this.sanitizeUrl();
  }

  createSvgIcon() {
    const svgIconName = this.inputPageCard.animatedIcon;
    const svgStatic = this.inputPageCard.staticIcon;
    if (svgIconName) {
      this.vcr().createComponent(this.componentMap[svgIconName]);
      this.renderer.setStyle(this.imageTag().nativeElement, 'display', 'none');
    } else if (svgStatic) {
      this.renderer.setAttribute(this.imageTag().nativeElement, 'src', `svg/${svgStatic}.svg`);
      this.renderer.setAttribute(this.imageTag().nativeElement, 'alt', `${svgStatic} icon`);
    } else {
      this.renderer.setAttribute(this.imageTag().nativeElement, 'src', 'svg/default.svg');
      this.renderer.setAttribute(this.imageTag().nativeElement, 'alt', `world icon`);
      this.renderer.setStyle(this.imageTag().nativeElement, 'width', '2.5rem');
      this.renderer.setStyle(this.imageTag().nativeElement, 'height', '2.4rem');
    }
  }

  sanitizeUrl(): string {
    let url = this.inputPageCard.url.replace(/^(https?:\/\/)?(www\.)?/, '');
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    return url;
  }
}
