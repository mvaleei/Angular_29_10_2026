import { Component, signal } from '@angular/core';


import { FormsModule } from '@angular/forms'

import { IFattura } from './Interfacce/IFattura';


//gestione pipe
import { TrasformareLetteraM } from '../Shared/CambiaLettera';

import { CalcoloIva } from '../Shared/ApplicaIva';

import { LowerCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    TrasformareLetteraM,
    CalcoloIva,
    LowerCasePipe,
    CurrencyPipe
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calcoloarea');

  figure: Array<string> = [
    "Rettangolo:1", "Triangolo:2"
  ]


  AltezzaFigura: number = 0

  BaseFigura: number = 0;

  Divisore: string = "Seleziona figura"


  risultato: string = ""

  calcolo(): void {

    let datoGlobale = this.Divisore.split(":")

    //let Area: number = (this.AltezzaFigura * this.BaseFigura) / this.Divisore

    let Area = (this.AltezzaFigura * this.BaseFigura) / parseInt(datoGlobale[1])

    //this.risultato = "La figura di tipo: " + datoGlobale[0] + " haun'area calcolata di: " + Area

    this.risultato = `La figura di tipo: ${datoGlobale[0]} haun'area calcolata di: ${Area}`  //alt + 96 backtik

    //this.risultato="La figura di tipo: xxx ha un'area calcolata di:yyy";

  }


  //gestione degli array  

  citta: Array<string> = ["Como", "Bologna", "Pescara", "Napoli", "Palermo"]

  aggiungiCitta(): void {
    this.citta.push("Viterbo")
  }


  nuovaCitta: string = ""

  addDynamic(): void {
    this.citta.push(this.nuovaCitta);
  }


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
