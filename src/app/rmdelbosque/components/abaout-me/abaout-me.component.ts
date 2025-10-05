import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { PresentacionComponent } from "./presentation/presentation.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { SkillsComponent } from "./skills/skills.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abaout-me',
  imports: [CommonModule, PresentacionComponent, SkillsComponent, TimelineComponent],
  templateUrl: './abaout-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbaoutMeComponent {
  active: 'presentation' | 'skills' = 'presentation';

  select(view: 'presentation' | 'skills') {
    this.active = view;
    // opcional: devolver foco o hacer scroll al componente si quieres
  }

  isActive(view: 'presentation' | 'skills') {
    return this.active === view;
  }
}


