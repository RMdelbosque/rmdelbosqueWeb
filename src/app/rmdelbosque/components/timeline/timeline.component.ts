import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ESTUDIOS, LABORAL, TimelineItem } from '../../interfaces/items.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html'
})
export class TimelineAnimatedComponent {
  laboral: TimelineItem[] = LABORAL;
  estudios: TimelineItem[] = ESTUDIOS;
}
