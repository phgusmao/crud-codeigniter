import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    return this.http.get('http://localhost:8081/');
  }

  getUserById(UserID: number): Observable<any> {
    return this.http.get('http://localhost:8081/api/show/' + UserID);
  }

  deleteUserById(UserID: number): Observable<any> {
    return this.http.get('http://localhost:8081/api/delete/' + UserID);
  }

  updateUser(UserID: number, data: any): Observable<any> {
    return this.http.post('http://localhost:8081/api/update/' + UserID, data);
  }

  createUser(data: any): Observable<any> {
    return this.http.post('http://localhost:8081/api/create', data);
  }
}
