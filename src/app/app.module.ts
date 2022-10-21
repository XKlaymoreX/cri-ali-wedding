import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedComponent } from './shared/shared.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { LandingSectionComponent } from './main/landing-section/landing-section.component';
import { CountdownSectionComponent } from './main/countdown-section/countdown-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SharedComponent,
    FooterComponent,
    MainComponent,
    RegistrationFormComponent,
    LandingSectionComponent,
    CountdownSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
