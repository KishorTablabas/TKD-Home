import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Views/home/home.component';
import { Home1Component } from 'src/app/Views/home1/home1.component';
import { HomepageComponent } from 'src/app/Views/homepage/homepage.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
