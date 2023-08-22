import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './sites/summary/summary.component';
import { HelpComponent } from './sites/help/help.component';
import { LegalNoticeComponent } from './sites/legal-notice/legal-notice.component';
import { SigninComponent } from './sites/signin/signin.component';
import { SignupComponent } from './sites/signup/signup.component';

const routes: Routes = [
  {path: '', component: SigninComponent},
  {path: 'sign-in', component: SigninComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'help', component: HelpComponent},
  {path: 'legal-notice', component: LegalNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
