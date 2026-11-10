import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fornitori',
  imports: [],
  templateUrl: './fornitori.html',
  styleUrl: './fornitori.css',
})
export class Fornitori implements OnInit {

  constructor(private rotta: ActivatedRoute) { }

  nomeFornitore: string = "Nome di base";
  fatturato: number = 0
  sedi: Array<string> = []

  ngOnInit(): void {

    this.rotta.queryParams.subscribe(
      (coppie) => {
        this.nomeFornitore = coppie['nome'];
        this.fatturato = coppie['fatturato'];
        this.sedi = coppie['sedi']
      }
    )

  }

}
