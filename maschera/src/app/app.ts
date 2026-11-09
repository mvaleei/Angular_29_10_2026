import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  ///protected readonly title = signal('maschera');


  //creo l'oggetto che dovrebbe contenere una serie di persone (nome,cognome,anni)
  persone: Array<FormGroup> = [];


  //struttura di ogni oggetto che si troverà dentro persone
  contactForm: FormGroup = new FormGroup(
    {
      nome: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      cognome: new FormControl("", [Validators.minLength(2)]),
      anni: new FormControl(0, [Validators.min(18)])
    }
  )


  //metodo eseguito al commit della form (mediante il suo pulsante)
  registra(): void {
    //aggiungo la persona che proviene dalla grafica alla lista (persone)
    this.persone.push(this.contactForm.value);
    console.log(this.persone)
  }

  resetta(): void {
    this.contactForm.reset;
  }

}
