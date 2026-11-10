import { Routes } from '@angular/router';

import { Clienti } from './clienti/clienti';
import { Fornitori } from './fornitori/fornitori';
import { Magazzino } from './magazzino/magazzino';
import { Fatture } from './fatture/fatture';

import { Listato } from './fatture/listato/listato';
import { Inserisci } from './fatture/inserisci/inserisci';

export const routes: Routes = [   //oggetto che gestisce e detta TUTTE le regole di routing del progetto

    //le regole di routing
    {
        path: 'clienti/:idcliente',   //:nomecliente/:indirizzo',  //path da intercettare
        component: Clienti
    },
    /* {
         path: 'prova',  //path da intercettare
         component: Clienti
     },*/
    {
        path: 'fornitori',
        component: Fornitori
    },
    {
        path: 'magazzino',
        component: Magazzino
    },
    {
        path: 'fatture',
        component: Fatture,
        children: [
            {
                path: 'lista',
                component: Listato
            },
            {
                path: 'insert',
                component: Inserisci
            }
        ]
    }
];
