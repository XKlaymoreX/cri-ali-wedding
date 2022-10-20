import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  dateDifference?: DateInterval

  imagePath: string = "src/assets/main.jpg"

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
  }

}

interface DateInterval {
  days: Number
  hours: Number
  minutes: Number
  seconds: Number
}
