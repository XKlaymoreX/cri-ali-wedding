export default class Invitation {

    nome : string
    cognome : string
    numeroAdulti : number
    numeroBambini : number
    dettagli : string

    constructor(
        nome: string,
        cognome: string,
        numeroAdulti: number,
        numeroBambini: number,
        dettagli: string
    ){
        this.nome = nome
        this.cognome = cognome
        this.numeroAdulti = numeroAdulti
        this.numeroBambini = numeroBambini
        this.dettagli = dettagli
    }



}