import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../modelo/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = 'https://dummyjson.com';

  constructor(private http: HttpClient) { }

  // GET -> traer todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URL}/users`);
  }

  // POST -> crear un usuario nuevo
  addUser(user: User): Observable<any> {
    return this.http.post(`${this.API_URL}/users/add`, user);
  }

  // PUT -> actualizar un usuario existente
  updateUser(id: number, user: User): Observable<any> {
    return this.http.put(`${this.API_URL}/users/${id}`, user);
  }

  // DELETE -> eliminar un usuario
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }
}