import { Component, inject, Input, Type, viewChild, ViewContainerRef } from '@angular/core';
import { SvgFirebaseComponent } from '../../svg/svg-firebase/svg-firebase.component';
import { SvgGithubComponent } from '../../svg/svg-github/svg-github.component';
import { SvgDefaultComponent } from '../../svg/svg-default/svg-default.component';
import { SvgGoogleAnalyticsComponent } from '../../svg/svg-google-analytics/svg-google-analytics.component';

interface PageCard {
  label: string;
  url: string;
  iconName?: string;
}

@Component({
  selector: 'app-page-card',
  standalone: true,
  imports: [],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.css',
})
export class PageCardComponent {
  @Input() inputPageCard: PageCard = { label: 'Mi pagina', url: 'https://www.google.co.uk/', iconName: 'default' };

  vcr = viewChild('container', { read: ViewContainerRef });
  cleanUrl: string = '';

  private componentMap: { [key: string]: Type<any> } = {
    firebase: SvgFirebaseComponent,
    googleanalytics: SvgGoogleAnalyticsComponent,
    github: SvgGithubComponent,
    default: SvgDefaultComponent,
  };

  ngOnInit(): void {
    this.createComponente();
    this.cleanUrl = this.sanitizeUrl();
  }

  createComponente() {
    const svgIconName = this.inputPageCard.iconName || 'default';
    this.vcr()?.createComponent(this.componentMap[svgIconName]);
  }

  sanitizeUrl(): string {
    let url = this.inputPageCard.url.replace(/^(https?:\/\/)/, '');
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    return url;
  }
}
