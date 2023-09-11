import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/Views/home/home.component';
import { HomepageComponent } from 'src/app/Views/homepage/homepage.component';

const routes: Routes = [
  {
    path: "", redirectTo: 'homepage', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'homepage', component: HomepageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
