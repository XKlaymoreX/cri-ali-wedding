import { Component } from '@angular/core';
import { LoadingStateProviderComponent } from './loading-state-provider/loading-state-provider.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoadingStateProviderComponent]
})

export class AppComponent {
  title = 'cri-ali-wedding';
  loader : LoadingStateProviderComponent 

  constructor(loader : LoadingStateProviderComponent){
    this.loader = loader
  }

    
  

}
