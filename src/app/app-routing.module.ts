import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './sites/summary/summary.component';
import { HelpComponent } from './sites/help/help.component';
import { LegalNoticeComponent } from './sites/legal-notice/legal-notice.component';
import { SigninComponent } from './sites/signin/signin.component';
import { SignupComponent } from './sites/signup/signup.component';

const title = 'Join';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent,
    title: title
  },
  {
    path: 'sign-in',
    component: SigninComponent,
    title: title + ' - Sign In'
  },
  {
    path: 'sign-up',
    component: SignupComponent,
    title: title + ' - Sign Up'
  },
  {
    path: 'summary',
    component: SummaryComponent,
    title: title
  },
  {
    path: 'help',
    component: HelpComponent,
    title: title + ' - Help'
  },
  {
    path: 'legal-notice',
    component: LegalNoticeComponent,
    title: title + ' - Legal notice'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
