import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clienti',
  imports: [],
  templateUrl: './clienti.html',
  styleUrl: './clienti.css',
})
export class Clienti implements OnInit, OnDestroy {

  constructor(private rotta: ActivatedRoute) { }

  ngOnInit(): void {
    this.idRicevuto = this.rotta.snapshot.params['idcliente']
    //alert("Sto per installare il componente dei clienti");
  }


  ngOnDestroy(): void {
    //alert("Il componente dei clienti sta per essere distrutto");
  }


  //onBeforeMount(() => {})

  idRicevuto: number = 0;


}
