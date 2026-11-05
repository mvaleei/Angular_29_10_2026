import { Pipe, PipeTransform } from "@angular/core";

@Pipe({

    name: "cambiaLetteraM",      // il nome del pipe da inserire nel file html
    standalone: true   // si potrebbe omettere per compatibilità vecchio versioni

})

export class TrasformareLetteraM implements PipeTransform {
    transform(valoreRicevuto: string, carattere: string): string {
        return valoreRicevuto.replace(carattere, "D");
    }

}