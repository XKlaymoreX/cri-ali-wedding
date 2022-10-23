import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-round-image',
  templateUrl: './round-image.component.html',
  styleUrls: ['./round-image.component.css']
})
export class RoundImageComponent implements OnInit {

  @Input("roundImage") roundImage:string
  @Input("imageAlt") imageAlt:string

  constructor() { }

  ngOnInit(): void {
  }

}
