import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'navbar-icon',
  imports: [],
  templateUrl: './navbar-icon.component.html'
})
export class NavbarIconComponent {

  envs = environment;

}
