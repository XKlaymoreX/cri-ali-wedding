import { Component, OnInit } from '@angular/core';
import { StoryItem } from 'src/app/story-item.class';

@Component({
  selector: 'app-our-story-section',
  templateUrl: './our-story-section.component.html',
  styleUrls: ['./our-story-section.component.css']
})
export class OurStorySectionComponent implements OnInit {


   storyItems : StoryItem[] = [ 
    new StoryItem("assets/story-1.jpeg","Marzo","Inizia il nostro viaggio ❤️✨"), 
    new StoryItem("assets/story-2.jpeg","Maggio","Tra maturità e feste 📚📚"), 
    new StoryItem("assets/story-3.jpeg","Luglio","Prima vacanza insieme, a Tenerife! Un'estate passata troppo in fretta...🏖️🦼🍎"), 
    new StoryItem("assets/story-4.jpeg","Settembre","Conoscenza dei parenti :)"), 
    new StoryItem("assets/villa-reale.jpeg","Novembre","Iniziano i preparativi. Location, inviti, photoshooting.. quante cose per la testa!"), 
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
