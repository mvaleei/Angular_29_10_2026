import { Component } from '@angular/core';

import { Son } from '../son/son';

@Component({
  selector: 'app-father',
  imports: [Son],
  templateUrl: './father.html',
  styleUrl: './father.css',
})
export class Father {

  nomeRicevuto: string = "Nome da ricevere"

}
