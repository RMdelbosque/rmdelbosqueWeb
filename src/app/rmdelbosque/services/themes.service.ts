import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  constructor() {
    // 👇 Activa el modo oscuro por defecto al iniciar la app
    const html = document.documentElement;
    if (!html.classList.contains('dark')) {
      html.classList.add('dark');
    }
  }

  toggleDarkMode() {
    const html = document.documentElement; // <html>
    html.classList.toggle('dark');
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
