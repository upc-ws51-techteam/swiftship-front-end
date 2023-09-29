import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import {ToastrModule} from "ngx-toastr";
import { LoginComponent } from './public/pages/login/login.component';
import { RegisterComponent } from './public/pages/register/register.component';
import { HomeComponent } from './public/pages/home/home.component';
import { UpdatepopupComponent } from './public/pages/updatepopup/updatepopup.component';
import { NavComponent } from './public/pages/nav/nav.component';
import { PlanListComponent } from './public/pages/plan-list/plan-list.component';
import {AuthService} from "./shared/services/auth.service";
import {PlansService} from "./shared/services/plans.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UpdatepopupComponent,
    NavComponent,
    PlanListComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, MatTableModule, MatPaginatorModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatToolbarModule, MatIconModule, MatCardModule, MatGridListModule, MatDividerModule,ReactiveFormsModule, ToastrModule.forRoot()
  ],
  providers: [AuthService, PlansService],
  bootstrap: [AppComponent]
})
export class AppModule { }
