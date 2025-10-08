import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TecnicalSckillsComponent } from './tecnical_sckills/tecnical_sckills.component';

@Component({
  selector: 'app-skills',
  imports: [TecnicalSckillsComponent],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent { }
