import { Component, OnInit } from '@angular/core';
import { DateInterval } from 'src/app/DateInterval';

@Component({
  selector: 'app-countdown-section',
  templateUrl: './countdown-section.component.html',
  styleUrls: ['./countdown-section.component.css']
})
export class CountdownSectionComponent implements OnInit {

  dateDifference?: DateInterval

  getDateDifference = () => {
    var weddingDate: number = new Date("July 23, 2023 13:30").getTime()
    var today: number = new Date().getTime()

    var timeLeft = weddingDate - today

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    this.dateDifference = {
      days, hours, minutes, seconds
    }
  }

  constructor() {
    setInterval(() => {
      this.getDateDifference()
    }, 1000)
  }

  ngOnInit(): void {

    this.getDateDifference()
  }

}

