import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../app.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed: boolean = false
  transparent: boolean = true

  @HostListener('window:resize', ['$event'])
  onResize(event){
    if(window.innerWidth < 768){
      this.transparent = false
    }else{
      this.transparent = true
    }
  }

  constructor() { 

    if(window.innerWidth < 768){
      this.transparent = false
    }else{
      this.transparent = true
    }

  }

  ngOnInit(): void {
  }

}
