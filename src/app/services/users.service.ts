import { Injectable } from '@angular/core';
import { Uris } from './Uris';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${Uris.users}`).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }

  createUser(obj: any) {
    return this.http.post(`${Uris.users}`, obj).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }

  deleteUser(id: string) {
    return this.http.delete(`${Uris.users}/${id}`).pipe(
      catchError((err: any) => {
        return err;
      }),
      map((resp: any) => {
        return resp;
      })
    );
  }
}