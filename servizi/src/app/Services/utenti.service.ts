import {
    Injectable,     //dependency injection
    inject         //per iniettare la chiamata al servizio
} from "@angular/core";

import {
    HttpClient      //modulo per effettaure la vera chiamata
} from "@angular/common/http";

import {
    IUtente     //l'oggetto per serializzare/deserializzare
} from "../Interfacce/IUtente";

import {
    Observable      //oggetto per gestire dati di tipo asincrono
} from "rxjs";


@Injectable(
    {
        providedIn: 'root'
    }
)

export class UtentiServizio {


    //creo l'oggetto per effettaure la chiamata
    private readonly httpOggetto = inject(HttpClient);

    //dichiaro l'URL 
    private url = "https://jsonplaceholder.typicode.com/users"

    getUtenti(): Observable<Array<IUtente>> {
        return this.httpOggetto.get<Array<IUtente>>(this.url);

    }


}