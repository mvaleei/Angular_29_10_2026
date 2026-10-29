var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var nome = "Giorgio";
console.log(nome);
var anni = 60;
var maggiorenne = true;
//anni="33" errore dato non corrispondente linguaggio fortemente tipizzato   
console.log(typeof (nome));
console.log(typeof (anni));
console.log(typeof (maggiorenne));
var annilavoro = "40";
annilavoro = "40";
annilavoro = false;
var persone = ["Giulio", "Angelo", "Daniele"];
console.log(persone.length);
persone.push("Fabiola");
console.log(persone.length);
var marioRossi = {
    id: 1,
    nome: "Mario Rossi",
    anni: 41,
    citta: "Milano"
};
console.log(marioRossi);
var GiorgioVerdi = {
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
};
var albertoGialli = {
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
};
var anagrafiche = [
    marioRossi, GiorgioVerdi, albertoGialli
];
console.log(anagrafiche);
var appartamento = /** @class */ (function () {
    function appartamento(mqInseriti, cittaInserita, via, propr) {
        this.mq = 0;
        this.citta = "";
        this.via = "";
        this.proprietario = "";
        this.mq = mqInseriti;
        this.citta = cittaInserita;
        this.via = via;
        //this.proprietario = propr
        this.setProp(propr);
    }
    appartamento.prototype.dettagli = function () {
        return this.citta + "-" + this.via + "-" + this.mq + "-" + this.proprietario;
    };
    appartamento.prototype.setProp = function (proprietarioRicevuto) {
        this.proprietario = proprietarioRicevuto;
    };
    appartamento.prototype.getPropr = function () {
        return this.proprietario;
    };
    appartamento.calcolo = "MQ * costo a mq";
    return appartamento;
}());
/*
var napoli = new appartamento()
napoli.mq = 80
napoli.citta = "Napoli"
napoli.via = "Pizza Garibaldi, 15"
*/
var napoli = new appartamento(80, "Napoli", "Piazza Garibaldi", "Ciro Immobile");
//console.log(napoli.citta + napoli.mq + napoli.via)
console.log(napoli.dettagli());
console.log(napoli.getPropr());
var Roma = new appartamento(65, "Roma", "Piazza Navona", "Totti Francesco");
console.log(appartamento.calcolo);
var villa = /** @class */ (function (_super) {
    __extends(villa, _super);
    function villa(citta, via, mq, prop, offerta) {
        var _this = _super.call(this, mq, citta, via, prop) || this;
        _this.tipoOfferta = "Privata";
        _this.tipoOfferta = offerta;
        return _this;
    }
    villa.prototype.dettagliVilla = function () {
        return this.dettagli() + "-" + this.tipoOfferta;
    };
    return villa;
}(appartamento));
var eur = new villa("Roma", "Viale America, 5", 120, "Alberto Tornante", "Privata");
var montanapoleone = new villa("Milano", "Via Montenapoleone, 5", 150, "Dario Darietti", "Pubblica");
console.log(eur.dettagliVilla());
console.log(montanapoleone.dettagliVilla());
