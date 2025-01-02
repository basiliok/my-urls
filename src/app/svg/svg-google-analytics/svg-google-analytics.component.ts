import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-google-analytics',
  imports: [],
  template: `
    <svg width="2.77rem" height="3rem" viewBox="0 0 88 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M87.4061 39.0648H63.4211V82.4255H87.4061V39.0648Z" fill="#F9AB00" />
      <path
        d="M75.4136 94.418C82.0369 94.418 87.4061 89.0487 87.4061 82.4255C87.4061 75.8022 82.0369 70.433 75.4136 70.433C68.7904 70.433 63.4211 75.8022 63.4211 82.4255C63.4211 89.0487 68.7904 94.418 75.4136 94.418Z"
        fill="#F9AB00"
      />
      <path
        d="M43.7026 94.418C50.3259 94.418 55.6951 89.0487 55.6951 82.4255C55.6951 75.8022 50.3259 70.433 43.7026 70.433C37.0794 70.433 31.7101 75.8022 31.7101 82.4255C31.7101 89.0487 37.0794 94.418 43.7026 94.418Z"
        fill="#E37400"
      />
      <path d="M55.6951 49.1322H31.7101V82.4263H55.6951V49.1322Z" fill="#E37400" />
      <path
        class="columna3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M63.4211 53.6557H87.4061V11.9928C87.4061 5.36939 82.037 0.000305176 75.4136 0.000305176C68.7902 0.000305176 63.4211 5.36939 63.4211 11.9928V53.6557Z"
        fill="#F9AB00"
      />
      <path
        class="columna2"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M55.6951 47.0398V82.4255H31.7101V47.0398C31.7101 40.4156 37.0792 35.0473 43.7026 35.0473C50.326 35.0473 55.6943 40.4156 55.6951 47.0398Z"
        fill="#E37400"
      />
      <path
        class="columna1"
        d="M11.9925 94.418C18.6157 94.418 23.9849 89.0487 23.9849 82.4255C23.9849 75.8022 18.6157 70.433 11.9925 70.433C5.36921 70.433 0 75.8022 0 82.4255C0 89.0487 5.36921 94.418 11.9925 94.418Z"
        fill="#E47809"
      />
    </svg>
  `,
  styles: [
    `
      .columna1,
      .columna2 {
        animation: rebote 1.2s;
        animation-delay: 0.7s;
      }
      .columna3 {
        animation: reboteInvertido 1.2s;
        animation-delay: 0.7s;
      }

      @keyframes rebote {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-2.3rem);
        }
        60% {
          transform: translateY(-1.15rem);
        }
      }

      @keyframes reboteInvertido {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(2.3rem);
        }
        60% {
          transform: translateY(1.15rem);
        }
      }
    `,
  ],
})
export class SvgGoogleAnalyticsComponent {}
