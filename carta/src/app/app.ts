import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Operazione } from './operazione/operazione';

import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Operazione, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('carta');


  saldo: number = 300

  riceviNuovoSaldoDalFiglio(saldoNuovo: number): void {
    this.saldo = saldoNuovo
  }

}
