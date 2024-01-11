import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';
import { TermAndConditionComponent } from './term-and-condition/term-and-condition.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    TermAndConditionComponent,
    RefundPolicyComponent
  ],
  imports: [
    CommonModule,
    AuthLayoutRoutingModule
  ]
})
export default class AuthLayoutModule { }
