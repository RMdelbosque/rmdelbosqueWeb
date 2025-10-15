import { Component } from '@angular/core';
import { SKILLS, Skill } from '../../../../interfaces/skiils.interface';

@Component({
  selector: 'app-tecnical-sckills',
  imports: [],
  templateUrl: './tecnical_sckills.component.html'
})
export class TecnicalSckillsComponent {
  skills: Skill[] = SKILLS;
}
