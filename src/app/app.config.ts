import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling  } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
      scrollPositionRestoration: 'top', // 👈 fuerza el scroll al inicio
      anchorScrolling: 'enabled',       // (opcional) para anchors tipo #contact
    })
    ),
    provideHttpClient()
  ]
};
