import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login = true
  message = "¿No tienes cuenta? Registrate aquí"
  constructor(

  ) { }

  changeMessage(){
    this.login = !this.login
    this.login ? this.message="¿No tienes cuenta? Registrate aquí": this.message="¿Ya tienes cuenta? Inicia sesión aquí"
    
  }
}
