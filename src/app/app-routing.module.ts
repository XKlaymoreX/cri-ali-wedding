import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliComponent } from './dettagli/dettagli.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { LocationComponent } from './location/location.component';
import { MainComponent } from './main/main.component';
import { PartecipaComponent } from './partecipa/partecipa.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'location', component: LocationComponent},
  {path:'galleria', component: GalleriaComponent},
  {path:'dettagli', component: DettagliComponent},
  {path:'partecipa', component: PartecipaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
