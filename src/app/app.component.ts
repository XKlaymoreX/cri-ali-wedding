import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingStateProviderComponent } from './loading-state-provider/loading-state-provider.component';
import { LoadingStateServiceService } from './loading-state-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoadingStateProviderComponent]
})

export class AppComponent implements OnInit {
  title = 'cri-ali-wedding';

  constructor(private loaderService: LoadingStateServiceService, private router: Router) {
  }

  ngOnInit() {
    this.loaderService.loadImages()
    this.router.events.subscribe(val => {
      if (val instanceof NavigationStart && val.url=="/galleria") {
        this.loaderService.loadImages()
      }
    })
  }




}
