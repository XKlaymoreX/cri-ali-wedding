import { Component, OnInit } from '@angular/core';
import { StoryItem } from 'src/app/story-item.class';

@Component({
  selector: 'app-our-story-section',
  templateUrl: './our-story-section.component.html',
  styleUrls: ['./our-story-section.component.css']
})
export class OurStorySectionComponent implements OnInit {


   storyItems : StoryItem[] = [ 
    new StoryItem("assets/main.jpeg","Marzo","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo diam, commodo a fringilla vel, feugiat id justo. Curabitur eget ipsum id orci luctus auctor. Quisque nulla erat, porta in massa id, finibus finibus velit. "), 
    new StoryItem("assets/main.jpeg","Aprile","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo diam, commodo a fringilla vel, feugiat id justo. Curabitur eget ipsum id orci luctus auctor. Quisque nulla erat, porta in massa id, finibus finibus velit. "), 
    new StoryItem("assets/main.jpeg","Maggio","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo diam, commodo a fringilla vel, feugiat id justo. Curabitur eget ipsum id orci luctus auctor. Quisque nulla erat, porta in massa id, finibus finibus velit. "), 
    new StoryItem("assets/main.jpeg","Giugno","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo diam, commodo a fringilla vel, feugiat id justo. Curabitur eget ipsum id orci luctus auctor. Quisque nulla erat, porta in massa id, finibus finibus velit. "), 
    new StoryItem("assets/main.jpeg","Luglio","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo diam, commodo a fringilla vel, feugiat id justo. Curabitur eget ipsum id orci luctus auctor. Quisque nulla erat, porta in massa id, finibus finibus velit. "), 
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
