import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PresentacionComponent } from '../../components/presentacion/presentacion.component';
import { TimelineAnimatedComponent } from '../../components/timeline/timeline.component';

@Component({
  selector: 'home-page',
  imports: [PresentacionComponent, TimelineAnimatedComponent],
  templateUrl: './home-page.component.html'
})
export default class HomePageComponent {

 }
