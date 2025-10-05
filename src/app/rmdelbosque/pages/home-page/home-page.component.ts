import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PresentacionComponent } from '../../components/abaout-me/presentation/presentation.component';
import { TimelineComponent } from '../../components/abaout-me/timeline/timeline.component';

@Component({
  selector: 'home-page',
  imports: [PresentacionComponent, TimelineComponent],
  templateUrl: './home-page.component.html'
})
export default class HomePageComponent {

 }
