import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { LocationComponent } from './location/location.component';
import { MainComponent } from './main/main.component';
import { PartecipaComponent } from './partecipa/partecipa.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'location', component: LocationComponent},
  {path:'galleria', component: GalleriaComponent},
  {path:'partecipa', component: PartecipaComponent},
  {path:'admin-analytics', component: AdminAnalyticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 




}
