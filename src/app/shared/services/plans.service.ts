import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  constructor(private http:HttpClient) { }
  basePath = `${environment.serverBasePath}`;
  resourceEndpoint = "/ships";

  private resourcePath(){
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  GetAll(){
    return this.http.get(this.resourcePath());
  }
}
