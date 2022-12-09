import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import {Auth, getAuth, signInWithEmailAndPassword, authState} from '@angular/fire/auth'
import { Database as FireDatabase } from '@angular/fire/database';
import { Database } from '../db_interaction';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Invitation from '../Invitation.class';

@Component({
  selector: 'app-admin-analytics',
  templateUrl: './admin-analytics.component.html',
  styleUrls: ['./admin-analytics.component.css', '../app.component.css']
})
export class AdminAnalyticsComponent implements OnInit {

  myForm : FormGroup = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.min(2),Validators.max(20)])
  })
  submitted: boolean = false
  auth: Auth = undefined
  loggedIn : boolean = undefined
  db: Database
  displayedData : {partecipazioni: Invitation[], canzoni: {songName:string, artist:string}[]} = {
    partecipazioni: [],
    canzoni : []
  }
  totalePartecipazioni = {
    adulti: 0,
    bambini: 0,
    partecipazioni: 0
  }

  constructor(private fire: FirebaseApp, private firebaseDb: FireDatabase) { }

  ngOnInit(): void {
    this.db = new Database(this.firebaseDb)
    this.auth = getAuth(this.fire)
    this.auth.signOut()
    authState(this.auth).subscribe(user => {
      if(user ==null){
        this.loggedIn = false
      }
      else {
        this.loggedIn = true
        this.db.retrieveData("/")
          .then(val => {
            this.displayedData.partecipazioni = Object.values(val["partecipazioni"])
            this.displayedData.canzoni = Object.values(val["canzoni"])
          })
          .then(() => {
            this.totalePartecipazioni = {
               adulti: this.displayedData.partecipazioni.map(inv => inv.numeroAdulti).reduce((a,b) => a+b),
               bambini: this.displayedData.partecipazioni.map(inv => inv.numeroBambini).reduce((a,b) => a+b),
               partecipazioni: this.displayedData.partecipazioni.length
            }
          })
        }
    })

  }


  submitForm = (e:Event) => {
    e.preventDefault()
    this.submitted = true
    if(this.myForm.valid){
      let email = this.myForm.get("email").value
      let password = this.myForm.get("password").value
      signInWithEmailAndPassword(this.auth,email,password)
      .then(() => {

      })
        .catch(err => console.log(err))
    }
    }


}
