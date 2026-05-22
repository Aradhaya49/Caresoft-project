import { Routes } from '@angular/router'

import { Login } from './login/login'
import { Signup } from './signup/signup'
import { DashboardComponent } from './dashboard/dashboard'
import { authGuard } from './auth-guard'

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'signup',
    component: Signup
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
]