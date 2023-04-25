import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PokemonViewComponentComponent } from './components/pokemon-view-component/pokemon-view-component.component';
import { PokeballSelectorComponentComponent } from './components/pokeball-selector-component/pokeball-selector-component.component';
import { HomeComponent } from './views/home/home.component';
import { GrassComponent } from './views/grass/grass.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonViewComponentComponent,
    PokeballSelectorComponentComponent,
    HomeComponent,
    GrassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
