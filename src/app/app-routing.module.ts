import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './sites/summary/summary.component';
import { HelpComponent } from './sites/help/help.component';
import { LegalNoticeComponent } from './sites/legal-notice/legal-notice.component';
import { WelcomeComponent } from './sites/welcome/welcome.component';
import { SigninComponent } from './sites/signin/signin.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'sign-in', component: SigninComponent},
  //{path: 'sign-up', component: SummaryComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'help', component: HelpComponent},
  {path: 'legal-notice', component: LegalNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
