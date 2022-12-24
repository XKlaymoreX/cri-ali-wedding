import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import Invitation from '../Invitation.class';

@Component({
  selector: 'app-partecipa',
  templateUrl: './partecipa.component.html',
  styleUrls: ['./partecipa.component.css', '../app.component.css']
})
export class PartecipaComponent implements OnInit {
  cookies = {
    isRegistered : false,
    invitation: null,
    song: false
  }
  constructor(
    private cookieService : CookieService
  ) { 
  }

  ngOnInit(){

    console.log(this.cookieService.getAll())
    if(this.cookieService.get("isRegistered")){
      this.cookies = {
        isRegistered: this.cookieService.get("isRegistered") ? <boolean><unknown>this.cookieService.get("isRegistered") : false,
        invitation: <Invitation>JSON.parse(this.cookieService.get("invitation")),
        song: (this.cookieService.get("song") === 'true')
      }
      console.log(this.cookies)

    }
  }

}
