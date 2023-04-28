import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'
import { DatePipe, TitleCasePipe } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

//PrimeNg imports
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

// Componets
import { PokemonViewComponentComponent } from './components/pokemon-view-component/pokemon-view-component.component';
import { PokeballSelectorComponent } from './components/pokeballSelector/pokeballSelector.component';
import { HomeComponent } from './views/home/home.component';
import { GrassComponent } from './views/grass/grass.component';
import { CapturesComponent } from './views/captures/captures.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonViewComponentComponent,
    PokeballSelectorComponent,
    HomeComponent,
    GrassComponent,
    LoginComponent,
    RegisterComponent,
    CapturesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DividerModule,
    AppRoutingModule,
    MenuModule,
    ToastModule,
    CardModule,
    
    DatePipe,
    TitleCasePipe,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
