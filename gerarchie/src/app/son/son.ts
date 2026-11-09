import { Component, Output, EventEmitter } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-son',
  imports: [FormsModule],
  templateUrl: './son.html',
  styleUrl: './son.css',
})
export class Son {

  nomeDigitato: string = ""

  @Output() eventoFiglio = new EventEmitter<string>()

  inviaNomeAlPadre(): void {
    //alert("Sto per inviare il nome al padre")
    this.eventoFiglio.emit(this.nomeDigitato);
  }


  anniDigitati: number = 0


  inviaAnniAlPadre(): void {
    //alert("Invio gli anni al padre")
    //scateniamo un evento per inviare dati al padre, risvegliandolo
    this.eventoAnni.emit(this.anniDigitati)
  }

  //creiamo un oggetto di tipo eventemitter
  @Output() eventoAnni = new EventEmitter<number>();


  //inviamo tutti i dati al padre
  sendAll(): void {
    this.eventoFiglio.emit(this.nomeDigitato);
    this.eventoAnni.emit(this.anniDigitati)
  }

}
