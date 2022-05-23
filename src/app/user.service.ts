import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
   return this.http.get('https://reqres.in/api/users?page=2');
  }

  deleteUser(id: string) {
    return this.http.delete('https://reqres.in/api/users/2');

  }

}
