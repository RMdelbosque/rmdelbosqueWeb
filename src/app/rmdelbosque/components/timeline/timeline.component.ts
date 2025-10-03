import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ESTUDIOS, LABORAL, TimelineItem } from '../../interfaces/items.interface';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html'
})
export class TimelineAnimatedComponent {
  // @Input() compact = false;
  // expanded = false;

  laboral: TimelineItem[] = LABORAL;
  estudios: TimelineItem[] = ESTUDIOS;

  // // Devuelve solo los primeros 1-2 elementos si está en modo compacto y no expandido
  // get laboralToShow() {
  //   return this.compact && !this.expanded ? this.laboral.slice(0, 1) : this.laboral;
  // }

  // get estudiosToShow() {
  //   return this.compact && !this.expanded ? this.estudios.slice(0, 1) : this.estudios;
  // }

  // toggleExpand() {
  //   this.expanded = !this.expanded;
  // }
}
