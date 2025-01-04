import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-youtube',
  imports: [],
  template: `
    <svg width="3rem" height="2.11rem" viewBox="0 0 85 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M84.645 29.8437C84.7077 13.8369 84.4141 0.735915 63.882 0.254359C49.5541 -0.0820703 35.0942 -0.0820703 20.763 0.254359C0.234175 0.735915 -0.0593756 13.8369 -5.65076e-06 29.8437C-0.0626739 45.8505 0.230877 58.9514 20.763 59.433C35.0909 59.7694 49.5508 59.7694 63.882 59.433C84.4108 58.9514 84.7044 45.8505 84.645 29.8437Z"
        fill="#D42222"
      />
      <path
        class="youtube-button"
        d="M34.7875 16.7856L46.0941 23.313L57.4008 29.8437L46.0941 36.3711L34.7875 42.8984V29.8437V16.7856Z"
        fill="#E0E0E0"
      />
    </svg>
  `,
  styles: [
    `
      .youtube-button {
        animation: press 1s ease;
        transform-origin: center;
        animation-delay: 0.7s;
      }

      @keyframes press {
        0%,
        100% {
          transform: scale(1);
        }
        30% {
          transform: scale(0.7);
        }
        50% {
          transform: scale(1.3);
        }
        70% {
          transform: scale(0.85);
        }
      }
    `,
  ],
})
export class SvgYoutubeComponent {}
