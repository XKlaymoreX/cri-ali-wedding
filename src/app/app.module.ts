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
import { OurStorySectionComponent } from './main/our-story-section/our-story-section.component';
import { RoundImageComponent } from './main/our-story-section/round-image/round-image.component';
import { SongFormComponent } from './song-form/song-form.component';
import { PartecipaComponent } from './partecipa/partecipa.component';
import { LocationComponent } from './location/location.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { GalleriaComponent } from './galleria/galleria.component';

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
    OurStorySectionComponent,
    RoundImageComponent,
    SongFormComponent,
    PartecipaComponent,
    LocationComponent,
    DettagliComponent,
    GalleriaComponent,
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
