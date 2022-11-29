import { Component, OnInit } from '@angular/core';
import { Database as FireDb, object } from '@angular/fire/database';
import { Database } from '../db_interaction';
import { LoadingStateProviderComponent } from '../loading-state-provider/loading-state-provider.component';


@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css'],
  providers: [LoadingStateProviderComponent]
})
export class GalleriaComponent implements OnInit {



  db: Database
  imageElements: HTMLImageElement[] = []
  loadedImages : number = 0
  showImages : boolean = false
  
  constructor( loadingState: LoadingStateProviderComponent) {
    

    let counter:number = 0

    do{
      let img= new Image()
      img.onload = () => {
        this.loaded()
      }
      img.src = "assets/galleria/"+(counter+1).toString() + ".jpeg"
      img.alt = 'img-'+(counter+1).toString()

      this.imageElements.push(img)
      counter++
    }while(counter < 41)

      this.imageElements = this.imageElements
        .map(value => ({value, sort:Math.random()}))
        .sort((a,b) => a.sort - b.sort)
        .map(({value}) => value)
   }


   loaded = () => {
    this.loadedImages++
    if(this.imageElements.length == this.loadedImages){
      this.showImages = true
    }


   }


  ngOnInit(): void {



  }

}
