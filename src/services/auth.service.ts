import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, authState, UserCredential } from '@angular/fire/auth';
import { User, signInWithPopup } from 'firebase/auth';
import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState = authState(this.auth);
  constructor(
    private auth: Auth,
  ) { }

/**
 * Registers a user with their email and password.
 * @param email - user email string.
 * @param password - user password string.
 * @returns Promise with the result of the createUserWithEmailAndPassword operation.
 */
register(email: string, password: string): Promise < UserCredential > {
  return createUserWithEmailAndPassword(this.auth, email, password)
}
/**
 * login a user with their email and password.
 * @param email - user email string.
 * @param password - user password string.
 * @returns Promise with the result of the signInWithEmailAndPassword operation.
 */
login(email: string, password: string): Promise < UserCredential > {
  return signInWithEmailAndPassword(this.auth, email, password)
}

/**
 * login a user with googleAuthProvider.
 * @returns Promise with the result of the googleAuthProvider operation.
 */
loginWithGoogle(): Promise < UserCredential > {
  return signInWithPopup(this.auth, new GoogleAuthProvider)
}

/**
 * Sign out from app.
 * @returns Promise with the result of the signOut operation.
 */
logout(): Promise < void> {
  return signOut(this.auth)
}
/**
 * Get the user status.
 * @returns Observable with the result of the state of the user, can be <User> if authorized or <null> if not.
 */
getUserStatus(): Observable < User | null > {
  return this.authState
}

}
