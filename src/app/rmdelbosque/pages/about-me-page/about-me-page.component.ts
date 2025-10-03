import { Component } from '@angular/core';
import { TimelineAnimatedComponent } from "../../components/timeline/timeline.component";
import { PresentacionComponent } from '../../components/presentacion/presentacion.component';

@Component({
  selector: 'about-me-page',
  imports: [TimelineAnimatedComponent, PresentacionComponent],
  templateUrl: './about-me-page.component.html',
})
export default class AboutMePageComponent { }
