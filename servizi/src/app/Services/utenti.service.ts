import {
    Injectable,     //dependency injection
    inject         //per iniettare la chiamata al servizio
} from "@angular/core";

import {
    HttpClient,     //modulo per effettaure la vera chiamata
    HttpHeaders     //per inviare dei dati (opzionali)
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


    //creo l'oggetto da inviare nella fase di post
    httpOptions = {
        header: new HttpHeaders(
            {
                'content-type': 'application/json'
            }
        )
    }

    aggiungiUtente(nuovo: IUtente): any {
        return this.httpOggetto.post(this.url, nuovo)
    }


}