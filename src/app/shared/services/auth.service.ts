import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  basePath = `${environment.serverBasePath}`;
  resourceEndpoint = "/users";

  private resourcePath(){
    return `${this.basePath}${this.resourceEndpoint}`;
  }
  GetAll(){
    return this.http.get(this.resourcePath());
  }
  GetById(id:any){
    return this.http.get(`${this.resourcePath()}/${id}`);
  }

  GetByUsername(username:any){
    return this.http.get(`${this.resourcePath()}/?username=${username}`);
  }

  ProceedRegistration(data:any){
    console.log(this.http.post(this.resourcePath(),data));
    return this.http.post(this.resourcePath(),data);
  }

  UpdateUser(id:any,data:any){
    return this.http.put(`${this.resourcePath()}/${id}`,data);
  }

  GetUserType() {
    return sessionStorage.getItem('username')!=null?sessionStorage.getItem('user_type'):'';
  }
  IsLoggedIn(){
    return sessionStorage.getItem('username')!=null;
  }

}
