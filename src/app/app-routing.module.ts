import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: "home", pathMatch: "full"
  },
  {
    path:'',
    component:HomeComponent,
    loadChildren:()=>import('./Layout/admin-layout/admin-layout.module')
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
