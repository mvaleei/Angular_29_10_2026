import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';  //modulo per consentire il binding two way

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule
  ],
  templateUrl: './app.html',
  //template: "<label>ciao</label>",
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('Primo progetto in angular');

  citta: string = "Firenze"

  anni: number = 25

  //metodo per cambiare il valore della città in salerno (statico)
  cambiaCitta(): void {
    this.citta = "Salerno"
  }

}

