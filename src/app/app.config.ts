import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'my-urls-76a38',
        appId: '1:134880993851:web:26aa09ed67b4055d94f21e',
        storageBucket: 'my-urls-76a38.firebasestorage.app',
        apiKey: 'AIzaSyAwx4AjER_PgeltgTn7-_TovvMdEFQG6dg',
        authDomain: 'my-urls-76a38.firebaseapp.com',
        messagingSenderId: '134880993851',
      }),
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
  ],
};
