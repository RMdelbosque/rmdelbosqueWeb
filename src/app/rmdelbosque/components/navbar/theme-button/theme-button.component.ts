import { Component, signal } from '@angular/core';
import { ThemeService } from 'src/app/rmdelbosque/services/themes.service';

@Component({
  selector: 'theme-button',
  standalone: true,   // 🔥 obligatorio para usarlo como standalone
  templateUrl: './theme-button.component.html'
})
export class ThemeButtonComponent {
 /* isDarkMode = signal(false);
  private _document = inject(DOCUMENT);

  constructor() {
    effect(() => {
      this._document.body.classList.toggle('dark', this.isDarkMode());
    });
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
  }*/

  isDarkMode = signal(false);

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleDarkMode();
    this.isDarkMode.set(!this.isDarkMode());
  }
}
