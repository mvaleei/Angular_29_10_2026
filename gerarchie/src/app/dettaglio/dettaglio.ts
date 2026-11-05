
import { Component, Input } from '@angular/core';
import { IFattura } from '../Interfacce/IFattura';

import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-dettaglio',
  imports: [UpperCasePipe],
  templateUrl: './dettaglio.html',
  styleUrl: './dettaglio.css',
})
export class Dettaglio {

  @Input() dettaglioFattura: IFattura = {
    numero: 0,
    cliente: "",
    descrizione: "",
    importo: 0,
    fatturabile: true
  }

  visibile: boolean = false;

  visualizza(): void {
    this.visibile = !this.visibile
  }

}
