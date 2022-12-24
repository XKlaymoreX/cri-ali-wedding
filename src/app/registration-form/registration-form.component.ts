import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Database } from '../db_interaction';
import Invitation from '../Invitation.class';
import { Database as FireDatabase } from '@angular/fire/database';
import { CookieOptions, CookieService } from 'ngx-cookie-service';
import { environment as e } from 'src/environments/environment';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css', '../app.component.css']
})
export class RegistrationFormComponent implements OnInit  {
  
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
  cookies 

  constructor(
    firebaseDb: FireDatabase,
    private cookie : CookieService
    ) {
    this.db = new Database(firebaseDb)


  }
  ngOnInit(): void {


    this.cookies = {
      isRegistered : this.cookie.get("isRegistered"),
      songAccepted : this.cookie.get("songAccepted")
    }

    if(this.cookies.isRegistered){
      this.registrationSuccess = true
    }
  }

  submitForm = (event:any, form: NgForm) => {
    event.preventDefault()
    if(form.valid){
    this.db.createInvitation(
      this.invitation
    ).then(success => {
      this.progress++
      this.registrationSuccess = true;
      this.cookie.set("invitation",JSON.stringify(this.invitation),365, e.cookie.path,e.cookie.domain,e.cookie.secure)
      this.cookie.set("isRegistered","true",365,e.cookie.path,e.cookie.domain,e.cookie.secure)
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
