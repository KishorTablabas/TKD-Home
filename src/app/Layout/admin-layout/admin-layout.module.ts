import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from "../../Components/components.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AdminLayoutComponent,
    ],
    imports: [
        CommonModule,
        AdminLayoutRoutingModule,
        ComponentsModule,
        FormsModule,
        ReactiveFormsModule
        
    ]
})
export default class AdminLayoutModule { }
