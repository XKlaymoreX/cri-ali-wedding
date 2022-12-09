import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedComponent } from './shared/shared.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FirebaseApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase, Database, DatabaseModule } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingSectionComponent } from './main/landing-section/landing-section.component';
import { CountdownSectionComponent } from './main/countdown-section/countdown-section.component';
import { OurStorySectionComponent } from './main/our-story-section/our-story-section.component';
import { RoundImageComponent } from './main/our-story-section/round-image/round-image.component';
import { SongFormComponent } from './song-form/song-form.component';
import { PartecipaComponent } from './partecipa/partecipa.component';
import { LocationComponent } from './location/location.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { AdminAnalyticsComponent } from './admin-analytics/admin-analytics.component';
import { LoadingStateProviderComponent } from './loading-state-provider/loading-state-provider.component';
import { LoadingStateServiceService } from './loading-state-service.service';

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
    AdminAnalyticsComponent,
    LoadingStateProviderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [
    LoadingStateServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
