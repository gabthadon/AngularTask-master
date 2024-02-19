import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './Components/task-form/task-form.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './Guard/auth.guard';

const routes: Routes = [
 {
  path:'home',
  component: TaskFormComponent,
  canActivate: [authGuard]
 },
 {
  path: 'register',
  component: RegisterComponent
 },
 
 {
  path: 'login',
  component:LoginComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
