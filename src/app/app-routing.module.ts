import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'partecipa', component: RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
