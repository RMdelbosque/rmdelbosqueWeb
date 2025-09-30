import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-timeline-animated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-animated.component.html',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class TimelineAnimatedComponent {
  index = 0;

  experiences = [
    { title: 'Estudios en Desarrollo Web', description: 'Ciclo Formativo Grado Superior' },
    { title: 'Primer empleo', description: 'Desarrollador Junior en Empresa X' },
    { title: 'Trabajo actual', description: 'Frontend Developer en Empresa Y' }
  ];

  visibleExperiences = [this.experiences[0]];

  next() {
    if (this.index < this.experiences.length - 1) {
      this.index++;
      this.visibleExperiences.push(this.experiences[this.index]);
    }
  }
}
