import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private darkClass = 'dark';

  initTheme(): void {
    if (typeof document === 'undefined') return; // seguro para SSR
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add(this.darkClass);
    } else if (saved === 'light') {
      document.documentElement.classList.remove(this.darkClass);
    } else {
      const prefersDark = !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (prefersDark) document.documentElement.classList.add(this.darkClass);
    }
  }

toggleTheme(): void {
  const html = document.documentElement;
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}
  isDark(): boolean {
    return typeof document !== 'undefined' && document.documentElement.classList.contains(this.darkClass);
  }
}
