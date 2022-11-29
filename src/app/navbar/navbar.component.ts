import { Component, HostListener, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, Route} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../app.component.css']
})
export class NavbarComponent implements OnInit {

  toggled: boolean = false
  currentRoute : string = ""

  expandNavbar = () => this.toggled = !this.toggled

  constructor( private router : Router) { 
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event instanceof NavigationStart){
        //Navigation starts
      }
      if (event instanceof NavigationEnd) {
        //Navigation ends, the url sets to the current route
        this.currentRoute = event.url;    
    }
    })
  }

}
