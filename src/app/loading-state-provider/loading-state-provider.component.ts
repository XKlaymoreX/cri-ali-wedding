import { Component, OnInit } from '@angular/core';
import { LoadingStateServiceService } from '../loading-state-service.service';

@Component({
  selector: 'app-loading-state-provider',
  templateUrl: './loading-state-provider.component.html',
  styleUrls: ['./loading-state-provider.component.css']
})
export class LoadingStateProviderComponent  implements OnInit {

  isWebsiteLoaded : boolean = false


  constructor(private loadingService: LoadingStateServiceService){
  }

  ngOnInit(): void {
    this.loadingService.isWebsiteLoaded.subscribe(x => this.isWebsiteLoaded = x)
  }

}
