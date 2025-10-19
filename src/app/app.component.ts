import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./rmdelbosque/components/navbar/navbar.component";
import { FooterComponent } from "./rmdelbosque/components/footer/footer.component";
import { ChatComponent } from "./rmdelbosque/components/chat/chat.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ChatComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rmdelbosque';

}
