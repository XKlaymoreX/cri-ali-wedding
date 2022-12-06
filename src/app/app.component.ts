import { Component } from '@angular/core';
import { LoadingStateProviderComponent } from './loading-state-provider/loading-state-provider.component';
import { LoadingStateServiceService } from './loading-state-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoadingStateProviderComponent]
})

export class AppComponent {
  title = 'cri-ali-wedding';

  constructor(private loaderService : LoadingStateServiceService){
    this.loaderService.loadImages()
  }

    
  

}
