import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { forgotPassModel } from './models/reset-password.model';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassowrdService {

  constructor(private http:HttpClient) { }

  forgot(data:any):Observable<forgotPassModel>{

    return  this.http.post<forgotPassModel>('https://localhost:44318/api/User/ForgotPassword',data);
  }
}
