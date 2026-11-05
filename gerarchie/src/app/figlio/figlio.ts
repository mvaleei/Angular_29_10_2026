import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-figlio',
  imports: [],
  templateUrl: './figlio.html',
  styleUrl: './figlio.css',
})
export class Figlio {

  @Input() cittaRicevuta: string = "Città base"    //in una property binding

}
