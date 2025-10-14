import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TecnicalSckillsComponent } from '../skills/tecnical_sckills/tecnical_sckills.component';
import { ButtonComponent } from "../../Button/Button.component";

@Component({
  selector: 'app-summary',
  imports: [RouterLink, TecnicalSckillsComponent, ButtonComponent],
  templateUrl: './summary.component.html'
})
export class SummaryComponent { }
