import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
const apiUrl = 'http://localhost:3000/users/';

@Injectable({
    providedIn: 'root',
  })
export class AuthAPIService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      this.http.post(apiUrl + 'authenticate', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });

  }
}
