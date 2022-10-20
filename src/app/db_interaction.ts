import {Database as FireDb, ref, set,push} from "@angular/fire/database"
import Invitation from "./Invitation"

export class Response {

}

export class Database {

    database: FireDb
    
    constructor(database: FireDb){
        this.database = database
    }


    createInvitation = async (invitation : Invitation): Promise<boolean> => {
        const endPoint = "partecipazioni/"+(invitation.cognome.concat("-"+invitation.nome).toLowerCase())
        try {
           await set(ref(this.database,endPoint),invitation)
           return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }



}