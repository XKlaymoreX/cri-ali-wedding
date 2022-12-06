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
    new StoryItem("assets/galleria/38.jpeg","25 Novembre 2022","La proposta 💍✨"), 
    new StoryItem("assets/villa-reale.jpeg","Dicembre","Iniziano i preparativi. Location, inviti, photoshooting.. quante cose per la testa!🤯"), 
    new StoryItem("assets/galleria/37.jpeg","27 Luglio 2023","Il nostro giorno ❤️"), 
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
