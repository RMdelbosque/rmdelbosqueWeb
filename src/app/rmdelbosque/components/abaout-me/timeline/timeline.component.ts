import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ESTUDIOS, LABORAL, TimelineItem } from '../../../interfaces/items.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html'
})
export class TimelineComponent {


  laboral: TimelineItem[] = LABORAL;
  estudios: TimelineItem[] = ESTUDIOS;
}
