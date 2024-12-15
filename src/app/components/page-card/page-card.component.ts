import { Component, Input } from '@angular/core';

interface PageCard {
  label: string;
  url: string;
}

@Component({
  selector: 'app-page-card',
  standalone: true,
  imports: [],
  templateUrl: './page-card.component.html',
  styleUrl: './page-card.component.css',
})
export class PageCardComponent {
  @Input() inputPageCard: PageCard = { label: 'Mi pagina', url: 'https://www.google.co.uk/' };
  cleanUrl: string = '';

  ngOnInit(): void {
    this.cleanUrl = this.sanitizeUrl();
  }

  sanitizeUrl(): string {
    let url = this.inputPageCard.url.replace(/^(https?:\/\/)/, '');
    if (url.endsWith('/')) {
      url = url.slice(0, -1);
    }
    return url;
  }
}
