import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login: Boolean = true
  showForms: Boolean = false
  message: String = "¿No tienes cuenta? Registrate aquí"
  
  constructor(
    private authServices: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authServices.getUserStatus().subscribe((val) => {
      if (val) {
        this.showForms = true
      }
    })
  }
  /**
   * Function to navigate to a new page
   * @param str a string with a URL
   */
  navigate(str: String):void {
    this.router.navigate([str])
  }
  /**
   * Function to change the button message and status every times its calls.
   */
  changeMessage():void {
    this.login = !this.login
    this.login ? this.message = "¿No tienes cuenta? Registrate aquí" : this.message = "¿Ya tienes cuenta? Inicia sesión aquí"

  }
}
