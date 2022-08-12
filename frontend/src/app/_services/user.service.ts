import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariable } from '../_globals/global-variables';

const API_URL = GlobalVariable.BASE_API_URL + '/test/';
const PRODUCT_API_URL = GlobalVariable.BASE_API_URL + '/products/';
const USER_API_URL = GlobalVariable.BASE_API_URL + '/user/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getProfile(): Observable<any> {
    return this.http.get(USER_API_URL + 'profile', { responseType: 'json' });
  }
}
