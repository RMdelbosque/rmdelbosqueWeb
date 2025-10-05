import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./rmdelbosque/components/navbar/navbar.component";
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'rmdelbosque';
  ngOnInit() {
    AOS.init({
      duration: 800, // duración de la animación en ms
      once: true, // solo animar una vez
    });
  }
}
