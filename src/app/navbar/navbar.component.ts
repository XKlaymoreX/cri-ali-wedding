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
  isTransparent: boolean 
  isMainPage : boolean

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(window.innerWidth < 768){
      this.isTransparent = false
    }else{
      if(this.isMainPage){
        this.isTransparent = true
      }else{
        this.isTransparent = false
      }
    }
  }

  expandNavbar = () => this.toggled = !this.toggled

  constructor( private router : Router) { 

    this.router.events.subscribe((event: Event) => {

      if(event instanceof NavigationStart){
        //Navigation starts
        if(event.url == "/"){
          this.isMainPage = true
          this.isTransparent = true
        }else{
          this.isMainPage = false
          this.isTransparent = false
        }
      }
      if (event instanceof NavigationEnd) {

        //Navigation ends, the url sets to the current route
        this.currentRoute = event.url;          
        console.log(event);
    }
    })

  }

  ngOnInit(): void {
  }

}
