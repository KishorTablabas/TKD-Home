import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { AdminLayoutComponent } from './Layout/admin-layout/admin-layout.component';
import { AboutComponent } from './Views/about/about.component';
import { ServicesComponent } from './Views/services/services.component';
import { AuthLayoutComponent } from './Layout/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '', redirectTo: "home1", pathMatch: "full"
  },

  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () => import('./Layout/admin-layout/admin-layout.module')
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () => import('./Layout/auth-layout/auth-layout.module')
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
