import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/Views/about/about.component';
import { HomeComponent } from 'src/app/Views/home/home.component';
import { Home1Component } from 'src/app/Views/home1/home1.component';
import { HomepageComponent } from 'src/app/Views/homepage/homepage.component';
import { ResourcesComponent } from 'src/app/Views/resources/resources.component';
import { ServicesComponent } from 'src/app/Views/services/services.component';
import { SolutionComponent } from 'src/app/Views/solution/solution.component';
import { TeamsImagesComponent } from 'src/app/Views/teams-images/teams-images.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'home1', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'home1', component: Home1Component
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'services', component: ServicesComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  },
  {
    path: 'solutions', component: SolutionComponent
  },
  {
    path: 'team', component: TeamsImagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
