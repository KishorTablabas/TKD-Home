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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbNavModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
