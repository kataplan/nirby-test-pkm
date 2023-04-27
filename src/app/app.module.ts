import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { DividerModule } from 'primeng/divider';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PokemonViewComponentComponent } from './components/pokemon-view-component/pokemon-view-component.component';
import { PokeballSelectorComponentComponent } from './components/pokeball-selector-component/pokeball-selector-component.component';
import { HomeComponent } from './views/home/home.component';
import { GrassComponent } from './views/grass/grass.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    PokemonViewComponentComponent,
    PokeballSelectorComponentComponent,
    HomeComponent,
    GrassComponent,
    LoginComponent,
    RegisterComponent
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
