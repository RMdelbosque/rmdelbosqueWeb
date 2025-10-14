import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './Button.component.html'
})
export class ButtonComponent {

  public link = input.required<string>();
  public text = input.required<string>();
 }
