import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operazione',
  imports: [FormsModule],
  templateUrl: './operazione.html',
  styleUrl: './operazione.css',
})
export class Operazione {


  @Input() tipoUtente: number = 0     //0 =utente master  |   1= utente che può prelevare


  importo: number = 0;

  @Input() importoRicevuto: number = 0

  @Output() inviaNuovoSaldo = new EventEmitter<number>()

  calcolo(): void {
    let nuovoSaldo: number = this.importoRicevuto;

    if (this.tipoUtente === 0) {
      if ((this.importo + this.importoRicevuto) <= 500) {
        nuovoSaldo = this.importo + this.importoRicevuto
      }
      else {
        alert("Attenzione, non si possono superare 500 euro di disponibilità")
      }
    }
    else {

      if ((this.importoRicevuto - this.importo) < 0) {
        alert("Attenzione fondi non disponibili")
      }
      else {
        nuovoSaldo = this.importoRicevuto - this.importo
      }

    }

    this.inviaNuovoSaldo.emit(nuovoSaldo);

  }

}
