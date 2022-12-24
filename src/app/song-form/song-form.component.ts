import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database } from '../db_interaction';
import { Database as FireDatabase } from '@angular/fire/database';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css', '../app.component.css']
})
export class SongFormComponent implements OnInit {

  song: { songName: string, artist: string } = { songName: "", artist: "" }
  saveSuccedded : boolean = false
  db : Database
  accept: boolean = false
  cookies

  ngOnInit(): void {
    this.cookies = {
      song: this.cookie.get("song")
    } 
    if(this.cookies.song){
        this.saveSuccedded = true
    }
  }


  submitForm = (event: any, form: NgForm) => {
    event.preventDefault()
    if (form.valid) {
      this.db.createSong(this.song).then(
        success => {
          this.saveSuccedded = true
          this.cookie.set("song","true",365,environment.cookie.path,environment.cookie.domain,environment.cookie.secure)
          location.reload()
        }
      )
    } else {
      this.saveSuccedded = false
      alert("qualcosa e' andato storto!")
    }
  }

  redirect = () => {
    location.reload()
  }

  constructor(db : FireDatabase,
    private cookie : CookieService
    ) {
    this.db = new Database(db)
   }

  
}
