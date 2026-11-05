import { Component } from '@angular/core';

import { IFattura } from '../Interfacce/IFattura';

import { Dettaglio } from '../dettaglio/dettaglio';

@Component({
  selector: 'app-listato',
  imports: [
    Dettaglio
  ],
  templateUrl: './listato.html',
  styleUrl: './listato.css',
})
export class Listato {

  contabilita: Array<IFattura> = [
    {
      numero: 1,
      descrizione: "Monitor 15''",
      cliente: "Mario Rossi",
      importo: 600,
      fatturabile: true
    },
    {
      numero: 2,
      descrizione: "Processore I9",
      cliente: "Giovanni Bianchi",
      importo: 758,
      fatturabile: false
    },
    {
      numero: 3,
      descrizione: "PC Completo",
      cliente: "Moreno Gialli",
      importo: 2400,
      fatturabile: true
    },
  ]

}
