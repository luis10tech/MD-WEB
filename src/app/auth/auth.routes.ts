import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const AUTH_ROUTES: Routes = [
  { path: 'register', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];
