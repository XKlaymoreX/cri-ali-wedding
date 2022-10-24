import { Component, OnInit } from '@angular/core';
import { StoryItem } from 'src/app/story-item.class';

@Component({
  selector: 'app-our-story-section',
  templateUrl: './our-story-section.component.html',
  styleUrls: ['./our-story-section.component.css']
})
export class OurStorySectionComponent implements OnInit {


   storyItems : StoryItem[] = [ 
    new StoryItem("assets/main.jpeg","Marzo","Tutto é iniziato"), 
    new StoryItem("assets/main.jpeg","Aprile","Sempre più uniti..."), 
    new StoryItem("assets/main.jpeg","Maggio","Passo dopo passo..."), 
    new StoryItem("assets/main.jpeg","Giugno","Vacanze insieme!"), 
    new StoryItem("assets/main.jpeg","Luglio","Tutti a Tenerife! "), 
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
