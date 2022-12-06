import { Component, OnInit } from '@angular/core';
import { Database as FireDb, object } from '@angular/fire/database';
import { Database } from '../db_interaction';
import { LoadingStateProviderComponent } from '../loading-state-provider/loading-state-provider.component';
import { LoadingStateServiceService } from '../loading-state-service.service';


@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css'],
  providers: [LoadingStateProviderComponent]
})
export class GalleriaComponent implements OnInit {

  imageElements: HTMLImageElement[] = []
  
  constructor( private loaderService : LoadingStateServiceService) {
  }
    

  ngOnInit()  {
    this.loaderService.isWebsiteLoaded.subscribe(x => {
        this.imageElements = this.loaderService.galleryImages
    })
  } 

}
