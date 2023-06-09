import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private authServices: AuthService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }
  /**
   * Function to login a existing user with a email and password.
  */
  onLoginSubmit(): void {
    this.authServices.login(this.loginForm.value.email, this.loginForm.value.password)
    this.loginForm.reset();
  }

  /**
   * Function to login/register a new user with a google authentication
  */
  onGoogleSignIn(): void {
    this.authServices.loginWithGoogle()
    this.loginForm.reset();
  }
}
