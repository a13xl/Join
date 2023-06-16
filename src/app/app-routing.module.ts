import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryComponent } from './sites/summary/summary.component';
import { HelpComponent } from './sites/help/help.component';
import { LegalNoticeComponent } from './sites/legal-notice/legal-notice.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'help', component: HelpComponent},
  {path: 'legal-notice', component: LegalNoticeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
