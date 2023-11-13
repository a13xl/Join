import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isChecked: boolean = false;

  constructor(public appComponent: AppComponent) { }

  signUp() {
    // Implement your sign in logic here
    // You can use services to communicate with the backend
    console.log('sign up');
    
  }

  redirectSignIn() {
    window.location.href = '/sign-in';
  }

  onCheckboxChange(value: boolean) {
    this.isChecked = value;
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }
}
