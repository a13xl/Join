import { Component, ElementRef, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  @ViewChild("contentOverlay") contentOverlay!: ElementRef; 

  email: string = '';
  password: string = '';
  animationDuration: number = 1500;
  animationDurationClass: string = this.animationDuration + 'ms';

  constructor(public appComponent: AppComponent) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.contentOverlay.nativeElement.classList.add('content-z-index');
    }, this.animationDuration);    
  }

  signIn() {
      // Implement your sign in logic here
      // You can use services to communicate with the backend
      console.log('sign in');
      
  }

  redirectSignUp() {
    window.location.href = '/sign-up';
  }
}
