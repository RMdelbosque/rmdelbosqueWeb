import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  label: string;
  route: string;
}

@Component({
  selector: 'navbar-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-options.component.html'
})
export class NavbarOptionsComponent {
  @Output() closeMenu = new EventEmitter<void>();

  menuOptions: MenuOptions[] = [
    {
      label: 'Home',
      route: 'home'
    },
    {
      label: 'Sobre mi',
      route: 'about'
    },
    {
      label: 'Portolio',
      route: 'portfolio'
    },
    {
      label: 'Contacto',
      route: 'contact'
    },
  ]
}
