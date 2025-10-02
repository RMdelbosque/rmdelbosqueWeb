import { Component} from '@angular/core';
import { NavbarIconComponent } from './navbar-icon/navbar-icon.component';
import { NavbarOptionsComponent } from './navbar-options/navbar-options.component';
import { ThemeButtonComponent } from "./theme-button/theme-button.component";

@Component({
  selector: 'navbar',
  imports: [NavbarIconComponent, NavbarOptionsComponent, ThemeButtonComponent, ThemeButtonComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

}
