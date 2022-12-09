import { Database as FireDb, ref, set, get, child, getDatabase, DatabaseReference } from "@angular/fire/database"
import Invitation from "./Invitation.class"


export class Database {

    database: FireDb

    constructor(database: FireDb) {
        this.database = database
    }

    retrieveData = (endpoint: string, dbRef: DatabaseReference = ref(this.database)): Promise<string> => {
        return get(child(dbRef, endpoint)).then((snapshot) => {
            if (snapshot.exists)
                return snapshot.val()
        }).catch(err => console.log(err))
    }

    createInvitation = async (invitation: Invitation): Promise<boolean> => {

        const endPoint = "partecipazioni/" + (invitation.cognome.concat("-" + invitation.nome).toLowerCase())
        try {
            await set(ref(this.database, endPoint), invitation)
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    createSong = async (song: { songName: string, artist: string }): Promise<boolean> => {
        const endPoint = "canzoni/" + (song.songName.concat("-" + song.artist).toLowerCase())
        try {
            await set(ref(this.database, endPoint), song)
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }


}