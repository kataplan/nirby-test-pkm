import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login:Boolean = true
  showForms:Boolean = false
  message:String = "¿No tienes cuenta? Registrate aquí"
  constructor(
    private authServices: AuthService,
    private router: Router,
  ) { }
  
  ngOnInit() {
    this.authServices.getUserStatus().subscribe((val)=>{
      if(val){
        this.showForms = true
      }
    })
  }
  
  navigate(str:String){
    this.router.navigate([str])
  }
  changeMessage() {
    this.login = !this.login
    this.login ? this.message = "¿No tienes cuenta? Registrate aquí" : this.message = "¿Ya tienes cuenta? Inicia sesión aquí"

  }
}
