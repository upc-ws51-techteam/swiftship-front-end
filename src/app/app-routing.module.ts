import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {RegisterComponent} from "./public/pages/register/register.component";
import {AuthGuard} from "./public/other/auth.guard";
import {PlanListComponent} from "./public/pages/plan-list/plan-list.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'plans', component: PlanListComponent, canActivate: [AuthGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule]
})
export class AppRoutingModule {
}
