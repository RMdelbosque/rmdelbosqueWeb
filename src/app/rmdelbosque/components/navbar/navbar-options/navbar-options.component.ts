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
      label: 'Inicio',
      route: 'home'
    },
    {
      label: 'Sobre mi',
      route: 'about'
    },
    {
      label: 'Portfolio',
      route: 'portfolio'
    },
    {
      label: 'Juego 2048',
      route: 'game'
    },
    {
      label: 'Contacto',
      route: 'contact'
    },
  ]
}
