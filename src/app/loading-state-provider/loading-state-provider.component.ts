import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-state-provider',
  templateUrl: './loading-state-provider.component.html',
  styleUrls: ['./loading-state-provider.component.css']
})
export class LoadingStateProviderComponent  {

  gino : string = "pino"
  isWebsiteLoaded : boolean = false

  sectionImagesHrefs : string[] =  [
    "assets/dettagli-mobile.jpeg",
    "assets/dettagli.jpeg",
    "assets/galleria-mobile.jpeg",
    "assets/galleria.jpeg",
    "assets/main-mobile.jpeg",
    "assets/main.jpeg",
    "assets/partecipa-mobile.jpeg",
    "assets/partecipa.jpeg",
    "assets/story-1.jpeg",
    "assets/story-2.jpeg",
    "assets/story-3.jpeg",
    "assets/story-4.jpeg",
    "assets/villa-reale.jpeg",
  ]
  
  sectionImagesNumber : number = 13
  galleryImagesNumber : number = 41

  loadedImages : number = 0

  sectionImages : HTMLImageElement[] = []
  galleryImages : HTMLImageElement[] = []

  constructor() {

    let counterGallery = 0

    do{
      let img= new Image()
      img.onload = () => {
        this.loaded()
      }
      img.src = "assets/galleria/"+(counterGallery+1).toString() + ".jpeg"
      img.alt = 'img-'+(counterGallery+1).toString()

      this.galleryImages.push(img)
      counterGallery++
    }while(counterGallery <  this.galleryImagesNumber)

    this.sectionImagesHrefs.forEach((item,index) => {
      let img= new Image()
      img.onload = () => {
        this.loaded()
      }

      img.src = item
      img.alt = "img-".concat(item.split(".").at(0))

      this.sectionImages.push(img)
    })

   }

 
  get getGino(){
    return this.gino
  }

  get getSectionImages() {
    return this.sectionImages
  }

  get getGalleryImages() {
    return this.galleryImages
  }

  loaded = () => {
    this.loadedImages++
    if(this.loadedImages == (this.sectionImagesNumber + this.galleryImagesNumber)){
      this.isWebsiteLoaded = true
      console.log(this.loadedImages)
      console.log(this.isWebsiteLoaded)
    }


  }

}
