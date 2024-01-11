import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';

const routes: Routes = [
  {
    path: 'term-and-condition',
    component: TermAndConditionComponent
  },
  {
    path: 'refund-policy',
    component: RefundPolicyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRoutingModule { }
