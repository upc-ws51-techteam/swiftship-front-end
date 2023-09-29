import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder:FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router) {
  }

  result: any;

  loginForm = this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  });

  proceedlogin(){
    if (this.loginForm.valid) {
      this.service.GetByUsername(this.loginForm.value.username).subscribe((res:any) => {
        this.result = res[0];
        console.log(this.result);
        if(this.result.password === this.loginForm.value.password){
          sessionStorage.setItem('username',this.result.username);
          sessionStorage.setItem('user_type',this.result.user_type);
          this.toastr.success("Login successful", "Welcome!",{timeOut: 3000});
          this.router.navigate(['home']);
        } else {
          this.toastr.error("Wrong username or password", "Error", {timeOut: 3000})
        }
      })
    }
  }
}
