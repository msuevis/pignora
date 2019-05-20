import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  apiURL  = 'localhost:8080/api/users/';

  constructor(private httpClient: HttpClient) {}

  public createUser(user: User) { return this.httpClient.post(this.apiURL, user); }

  public getUser(id: string) { return this.httpClient.get('${this.apiURL}/${id}'); }

}
