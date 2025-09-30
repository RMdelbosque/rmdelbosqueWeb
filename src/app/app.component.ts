import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './rmdelbosque/services/Themes.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'rmdelbosque';
  constructor(private theme: ThemeService) {
  this.theme.initTheme();
}
}
