import { Component } from '@angular/core';

@Component({
  selector: 'app-listato',
  imports: [],
  templateUrl: './listato.html',
  styleUrl: './listato.css',
})
export class Listato {

  listaFatture: Array<string> = [
    "1 - Mario Rossi - Viale Angelico 33 - 101551 - 1.500 - Computer fisso",
    "2 - Angelo Luotto - Piazza Alberone 105 - 202045 - 600 - Monitor"
  ]

}
