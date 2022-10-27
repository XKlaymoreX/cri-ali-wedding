import { Component, OnInit } from '@angular/core';
import { Database as FireDb, object } from '@angular/fire/database';
import { Database } from '../db_interaction';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {

  db: Database
  imageElements: HTMLImageElement[] = []
  loadedImages : number = 0
  showImages : boolean = false
  
  constructor(db:FireDb) {
    this.db = new Database(db)

    this.db.retrieveData('immagini')
    .then(res=> {
      Object.keys(res).forEach((key, i) => {
          let img = new Image(100,100)

            img.onload = () => {
              this.loaded()
            }
          img.src = Object.values(res)[i]
          img.alt = key
        this.imageElements.push(
          img
        )
      })
    })

    
   }


   loaded = () => {
    this.loadedImages++
    console.log(this.loadedImages)
    if(this.imageElements.length == this.loadedImages){
      this.showImages = true
    }
   }


  ngOnInit(): void {



  }

}
