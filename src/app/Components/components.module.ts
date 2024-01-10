import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RefundComponent } from './refund/refund.component';



@NgModule({
  declarations: [
    NavbarComponent,
    RefundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    RefundComponent
  ]
})
export class ComponentsModule { }
