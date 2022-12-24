import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Database } from '../db_interaction';
import Invitation from '../Invitation.class';
import { Database as FireDatabase } from '@angular/fire/database';
import { CookieService } from 'ngx-cookie-service';
import { environment as e } from 'src/environments/environment';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css', '../app.component.css']
})
export class RegistrationFormComponent  {
  
  invitation:Invitation = new Invitation("","",0,0,"")
  
  progressPercentage: number = 50
  progress: number = 1
  registrationSuccess: boolean = false
  progressSubtitles: string[] =
    [
      "Parliamo un po' di voi...",
      "Ultimo step 😁",
      "Ottimo, registro il tuo invito... ❤️",
    ]
  db: Database

  constructor(
    firebaseDb: FireDatabase,
    private cookie : CookieService
    ) {
    this.db = new Database(firebaseDb)
  }

  submitForm = (event:any, form: NgForm) => {
    event.preventDefault()
    if(form.valid){
    this.db.createInvitation(
      this.invitation
    ).then(success => {
      this.progress++
      this.registrationSuccess = true;
      console.log(this.cookie)
      this.cookie.set("isRegisterd","true",10,e.cookie.path,e.cookie.domain,e.cookie.secure)
    })
  }else{
    alert("qualcosa e' andato storto!")
  }


  }
  incrementProgress = () => {
    if (this.progress < 3) {
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
