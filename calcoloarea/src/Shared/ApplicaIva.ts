import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {
        name: 'Iva',
        standalone: true
    }
)

export class CalcoloIva implements PipeTransform {

    transform(importoRicevuto: number, applicare: boolean): number {

        if (applicare) {
            return importoRicevuto * 22 / 100 + importoRicevuto
        }
        else {
            return importoRicevuto
        }


    }

}