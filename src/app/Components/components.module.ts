import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RefundComponent } from './refund/refund.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    RefundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    RefundComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
