import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentation.component.html'
})
export class PresentacionComponent {
  envs = environment;
}
