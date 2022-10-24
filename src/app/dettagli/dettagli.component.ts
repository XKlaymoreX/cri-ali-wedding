import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit, AfterViewInit {


  constructor() {


   }

   isLoaded = () => alert('loaded')

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
