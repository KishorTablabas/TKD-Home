import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Views/home/home.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';
import { HomepageComponent } from './Views/homepage/homepage.component';
import { Home1Component } from './Views/home1/home1.component';
import { AboutComponent } from './Views/about/about.component';
import { ServicesComponent } from './Views/services/services.component';
import { ResourcesComponent } from './Views/resources/resources.component';
import { SolutionComponent } from './Views/solution/solution.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamsImagesComponent } from './Views/teams-images/teams-images.component';
import { ComponentsModule } from "./Components/components.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomepageComponent,
        Home1Component,
        AboutComponent,
        ServicesComponent,
        ResourcesComponent,
        SolutionComponent,
        TeamsImagesComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbNavModule,
        SwiperModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ]
})
export class AppModule { }
