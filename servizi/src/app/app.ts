import { Component, signal } from '@angular/core';
import { IUtente } from './Interfacce/IUtente';

import { UtentiServizio } from './Services/utenti.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [UtentiServizio]
})
export class App {
  constructor(private _Utenti: UtentiServizio) { }

  listaUtenti = signal<Array<IUtente>>([])  //crear un oggetto da inserire nello stato del componente
  //lo stato non può essere variato, ma deve essere SOSTITUITO (IMMUTABILITà)
  ricezione(): void {
    //alert("Sto per consumare il servizio");

    this._Utenti.getUtenti().subscribe(
      {
        next: (datoCheArriva: any) => {
          console.log(datoCheArriva);
          this.listaUtenti.set(datoCheArriva)
          //fino alla chiusura del metodo l'oggetto non sarà aggiornato
          //in quanto l'aggiornamento è asincrono
          console.log(this.listaUtenti);
        },
        error: (errore) => { console.log(errore) }
      }
    )

  }

  addUtente(): void {
    let nuovoUtente: IUtente = {
      id: 999,
      name: "Pippo",
      username: "Minni",
      email: "pippo@minni.it"
    }
    this._Utenti.aggiungiUtente(nuovoUtente).subscribe(
      {
        next: (nuovo: any) => { console.log(nuovo) },
        error: (errore: any) => { console.log(errore) }
      }
    )
  }

}
