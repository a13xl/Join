import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  async sigin(email: string, password: string) {
    try {
      await this.signInWithEmailAndPwd(email, password);
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  }

  async signInWithEmailAndPwd(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    });
  }

  async sigup(email: string, password: string) {
    try {
      await this.createAccount(email, password);
    } catch (error) {
      console.log(`There was an error: ${error}`);
    }
  }

  async createAccount(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user))
    });
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

}
