import { Component, signal } from '@angular/core';

import { Figlio } from './figlio/figlio';

import { FormsModule } from '@angular/forms';

import { Listato } from './listato/listato';

import { Father } from './father/father';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Figlio,
    Listato,
    Father
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('gerarchie');


  cittaNascita: string = "Salerno"


}
