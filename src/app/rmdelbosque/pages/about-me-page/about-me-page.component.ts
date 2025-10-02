import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineAnimatedComponent } from "../../components/timeline/timeline.component";

@Component({
  selector: 'about-me-page',
  imports: [TimelineAnimatedComponent],
  templateUrl: './about-me-page.component.html',
})
export default class AboutMePageComponent { }
