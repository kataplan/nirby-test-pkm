import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.formBuilder.group({
    email: new FormControl(),
    password: new FormControl()
  });
  
  constructor(
    private authServices: AuthService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  onRegisterSubmit(): void {
    this.authServices.register(this.registerForm.value.email, this.registerForm.value.password)
      .then(() =>  
        this.router.navigate(['']))
      .catch(error => console.log(error))
    
    this.registerForm.reset();
  }
  onGoogleSignIn():void{
    this.authServices.loginWithGoogle()
    .then(() => {
      this.router.navigate(['/grass'])
    })
  }
}
