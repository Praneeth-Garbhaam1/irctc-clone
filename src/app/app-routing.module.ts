import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './alerts/alerts.component';
import { LoginComponent } from './login/login.component';
import { RailwaysComponent } from './railways/railways.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path: 'alerts',
    component: AlertsComponent
  },
  {
    path: 'railways',
    component: RailwaysComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
