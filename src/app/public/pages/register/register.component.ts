import { Component } from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AuthService} from "../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder:FormBuilder, private toastr:ToastrService, private service:AuthService, private router:Router) {
  }

  registerForm = this.builder.group({
    id:this.builder.control(''),
    first_name:this.builder.control('',Validators.required),
    last_name:this.builder.control('',Validators.required),
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]{5,}$')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    phone:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('^[0-9]{9}$')])),
    user_type:this.builder.control('client')
  });

  proceedregistration(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      this.service.ProceedRegistration(this.registerForm.value).subscribe((res:any)=>{
        this.toastr.success("Registration successful", "Welcome!",{timeOut: 3000});
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning("Please enter valid data", "Warning", {timeOut: 3000})
      console.log(`Invalid form data:\n
      first_name: ${this.registerForm.value.first_name}\n
      last_name: ${this.registerForm.value.last_name}\n
      username: ${this.registerForm.value.username}\n
      password: ${this.registerForm.value.password}\n
      email: ${this.registerForm.value.email}\n
      phone: ${this.registerForm.value.phone}\n
      user_type: ${this.registerForm.value.user_type}`);
    }
  }
}
