import { Component, signal } from '@angular/core';
import {
  RouterOutlet,  //modulo importato automaticamente per gestire il routing
  RouterLink      //modulo per innestare i componenti senza contattare il server (creare il componente lato front-end)
} from '@angular/router';

import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rotte');

  idScelto: number = 0


}
