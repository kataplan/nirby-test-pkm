import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, authState } from '@angular/fire/auth';
import { User, signInWithPopup } from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = authState(this.auth);
  constructor(
    private auth: Auth,
  ) {}
  

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password)
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider)
  }

  logout() {
    return signOut(this.auth)
  }

  getUserStatus(){
    return this.authState
  }

}
