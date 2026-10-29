var nome: string = "Giorgio"

console.log(nome)

var anni: number = 60

var maggiorenne: boolean = true
//anni="33" errore dato non corrispondente linguaggio fortemente tipizzato   

console.log(typeof (nome))

console.log(typeof (anni))

console.log(typeof (maggiorenne))

var annilavoro: any = "40"

annilavoro = "40"
annilavoro = false

var persone: Array<string> = ["Giulio", "Angelo", "Daniele"]

console.log(persone.length)

persone.push("Fabiola")

console.log(persone.length)

interface sport {
    descrizione: string,
    praticato: number
}


interface people {   //struttura di un record  / tipo di dato
    id: number,
    nome: string,
    anni: number,
    citta: string,
    sportsPraticati?: Array<sport>
}


var marioRossi: people = {
    id: 1,
    nome: "Mario Rossi",
    anni: 41,
    citta: "Milano"
}

console.log(marioRossi)


var GiorgioVerdi: people = {
    id: 2,
    nome: "Giorgio Verdi",
    anni: 29,
    citta: "Palermo",
    sportsPraticati: [
        {
            descrizione: "Calcio",
            praticato: 5
        }
    ]
}

var albertoGialli: people = {
    id: 3,
    nome: "Alberto Gialli",
    anni: 37,
    citta: "Caserta",
    sportsPraticati: [
        {
            descrizione: "Nuoto",
            praticato: 5
        },
        {
            descrizione: "Tennis",
            praticato: 6
        },
        {
            descrizione: "Pallamano",
            praticato: 3
        }
    ]
}

var anagrafiche: Array<people> = [
    marioRossi, GiorgioVerdi, albertoGialli
]

console.log(anagrafiche)


class appartamento {
    mq: number = 0
    citta: string = ""
    via: string = ""
    private proprietario: string = ""

    constructor(mqInseriti: number, cittaInserita: string, via: string, propr: string) {
        this.mq = mqInseriti
        this.citta = cittaInserita
        this.via = via
        //this.proprietario = propr
        this.setProp(propr)
    }

    dettagli(): string {
        return this.citta + "-" + this.via + "-" + this.mq + "-" + this.proprietario
    }

    setProp(proprietarioRicevuto: string): void {
        this.proprietario = proprietarioRicevuto
    }


    getPropr(): string {
        return this.proprietario
    }

    static calcolo: string = "MQ * costo a mq";

}


/*
var napoli = new appartamento()
napoli.mq = 80
napoli.citta = "Napoli"
napoli.via = "Pizza Garibaldi, 15"
*/

var napoli = new appartamento(80, "Napoli", "Piazza Garibaldi", "Ciro Immobile")


//console.log(napoli.citta + napoli.mq + napoli.via)

console.log(napoli.dettagli())

console.log(napoli.getPropr())


var Roma = new appartamento(65, "Roma", "Piazza Navona", "Totti Francesco")

console.log(appartamento.calcolo)

class villa extends appartamento {
    tipoOfferta: string = "Privata"
    constructor(citta: string, via: string, mq: number, prop: string, offerta: string) {
        super(mq, citta, via, prop)  //costruttore della super class
        this.tipoOfferta = offerta

    }

    dettagliVilla(): string {
        return this.dettagli() + "-" + this.tipoOfferta
    }

}

var eur = new villa("Roma", "Viale America, 5", 120, "Alberto Tornante", "Privata")
var montanapoleone = new villa("Milano", "Via Montenapoleone, 5", 150, "Dario Darietti", "Pubblica")
console.log(eur.dettagliVilla())
console.log(montanapoleone.dettagliVilla())