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

  riceviNomeDalFiglio(nomeDaRicevere: string): void {
    this.nomeRicevuto = nomeDaRicevere;
  }


  anniRicevuti: number = 555

  riceviAnniDalFiglio(anniRicevutiDalFiglio: number): void {
    this.anniRicevuti = anniRicevutiDalFiglio;
  }

}
