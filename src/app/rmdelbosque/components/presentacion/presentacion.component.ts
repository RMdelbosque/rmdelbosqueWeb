import { Component } from '@angular/core';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-presentacion',
  imports: [],
  templateUrl: './presentacion.component.html'
})
export class PresentacionComponent {
  envs = environment;
}
