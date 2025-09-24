import { Component } from '@angular/core';
import { NavbarIconComponent } from './navbar-icon/navbar-icon.component';
import { NavbarLoginIconComponent } from './navbar-login-icon/navbar-login-icon.component';
import { NavbarOptionsComponent } from './navbar-options/navbar-options.component';

@Component({
  selector: 'navbar',
  imports: [NavbarIconComponent, NavbarLoginIconComponent, NavbarOptionsComponent],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent { }
