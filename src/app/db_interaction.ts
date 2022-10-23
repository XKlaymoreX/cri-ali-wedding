import {Database as FireDb, ref, set,push} from "@angular/fire/database"
import Invitation from "./Invitation.class"

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

    createSong = async (song : {songName:string, artist:string}): Promise<boolean> => {
        const endPoint = "canzoni/"+(song.songName.concat("-"+song.artist).toLowerCase())
        try {
           await set(ref(this.database,endPoint),song)
           return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }


}