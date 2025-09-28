import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'home-page',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './home-page.component.html'
})
export default class HomePageComponent {

 }
