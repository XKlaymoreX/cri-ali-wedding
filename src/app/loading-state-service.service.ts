import { EventEmitter, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingStateServiceService{

  isWebsiteLoaded : EventEmitter<boolean> = new EventEmitter<boolean>(false)
  
  galleryImagesNumber : number = 39
  loadedImages : number = 0
  galleryImages : HTMLImageElement[] = []


  constructor() { }




  loadImages = () => {
    this.galleryImages = []
    this.isWebsiteLoaded.emit(false)
    let counterGallery = 0
    this.loadedImages = 0
    //Loading Gallery Images
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
  }

  loaded = () => {
    this.loadedImages++
    if(this.loadedImages == ( this.galleryImagesNumber)){
      this.isWebsiteLoaded.emit(true)
    }
  }


}
