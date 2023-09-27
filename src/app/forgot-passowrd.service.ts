import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPassowrdService {

  constructor(private http:HttpClient) { }

  forgot(data:any):Observable<any>{
    return  this.http.post('https://localhost:44318/api/User/ForgotPassword',data);
  }
}
