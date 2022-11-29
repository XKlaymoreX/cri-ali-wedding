import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Database } from '../db_interaction';
import { Database as FireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css', '../app.component.css']
})
export class SongFormComponent implements OnInit {

  song: { songName: string, artist: string } = { songName: "", artist: "" }
  succeded: boolean = false
  db : Database

  submitForm = (event: any, form: NgForm) => {
    event.preventDefault()
    if (form.valid) {
      this.db.createSong(this.song).then(
        success => {
          this.succeded = true
        }
      )
    } else {
      this.succeded = false
      alert("qualcosa e' andato storto!")
    }


  }

  constructor(db : FireDatabase) {
    this.db = new Database(db)
   }

  ngOnInit(): void {
  }

}
