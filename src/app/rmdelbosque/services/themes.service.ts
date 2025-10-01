import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDarkMode() {
    const html = document.documentElement; // <html>
    html.classList.toggle('dark');
  }

  isDarkMode(): boolean {
    return document.documentElement.classList.contains('dark');
  }
}
