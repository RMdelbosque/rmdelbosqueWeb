import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'home-page',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './home-page.component.html'
})
export default class HomePageComponent {

 }
