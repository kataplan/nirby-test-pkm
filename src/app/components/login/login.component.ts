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

  onLoginSubmit(): void {
    this.authServices.login(this.loginForm.value)
      .then(() => {
        this.router.navigate(['/grass'])
      })
    console.log(this.loginForm.value)
    this.loginForm.reset();
  }
  onGoogleSignIn(): void {
    this.authServices.loginWithGoogle()
      .then(() => {
        this.router.navigate(['/grass'])
      })
  }
}
