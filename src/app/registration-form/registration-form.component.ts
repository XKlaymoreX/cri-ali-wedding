import { Component, ElementRef, ViewChild } from '@angular/core';
import { Database as FireDb } from '@angular/fire/database';
import { NgModel, NgForm } from '@angular/forms';
import { Database } from '../db_interaction';
import Invitation from '../Invitation';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css', '../app.component.css']
})
export class RegistrationFormComponent  {
  
  invitation:Invitation = new Invitation("","",0,0,"")
  
  progressPercentage: number = 50
  progress: number = 1
  progressSubtitles: string[] =
    [
      "Parliamo un po' di voi...",
      "Ultimo step 😁",
      "Sto Inviando la registrazione...",
      "Completato! Verrai re-indirizzato a breve ✅"
    ]
  db: Database

  constructor(firebaseDb: FireDb) {
    this.db = new Database(firebaseDb)
  }

  submitForm = (event:any, form: NgForm) => {
    event.preventDefault()
    if(form.valid){
    this.db.createInvitation(
      this.invitation
    ).then(success => {
      this.progress++
    })
  }else{
    alert("qualcosa e' andato storto!")
  }


  }
  incrementProgress = () => {
    if (this.progress < 2) {
      let interval = setInterval(() => {
        if (this.progressPercentage < 99) {
          this.progressPercentage++
        } else {
          clearInterval(interval)
        }
      }, 9)
    } else {
      this.progressPercentage++
    }
    this.progress++;
  }
  decrementProgress = () => {
    let interval = setInterval(() => {
      if (this.progressPercentage > 50) {
        this.progressPercentage--
      } else {
        clearInterval(interval)
      }
    }, 9)
    this.progress--;
  }

}
