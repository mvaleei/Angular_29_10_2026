import { Component, signal } from '@angular/core';

import { Figlio } from './figlio/figlio';

import { FormsModule } from '@angular/forms';

import { Listato } from './listato/listato';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Figlio,
    Listato
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerarchie');


  cittaNascita: string = "Salerno"


}
