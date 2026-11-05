import { Component, signal } from '@angular/core';


import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calcoloarea');


  AltezzaFigura: number = 0

  BaseFigura: number = 0;

  Divisore: string = "Seleziona figura"


  risultato: string = "Valore iniziale"

  calcolo(): void {

    let datoGlobale = this.Divisore.split(":")

    //let Area: number = (this.AltezzaFigura * this.BaseFigura) / this.Divisore

    let Area = (this.AltezzaFigura * this.BaseFigura) / parseInt(datoGlobale[1])

    //this.risultato = "La figura di tipo: " + datoGlobale[0] + " haun'area calcolata di: " + Area

    this.risultato = `La figura di tipo: ${datoGlobale[0]} haun'area calcolata di: ${Area}`  //alt + 96 backtik

    //this.risultato="La figura di tipo: xxx ha un'area calcolata di:yyy";

  }


}
