import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Manager } from '../interfaces/manager';
import { User } from '../interfaces/user';

const API = 'http://localhost:5050/users'

@Injectable()
export class UserService implements Manager<User> {

  constructor(private http: HttpClient) { 
    this.load()
  }

  data$ = new BehaviorSubject<User[]>([]);

  create (data: Partial<User>): Observable<User|null> {
    return of(null)
  }

  private load () {
    this.http.get<User[]>(API).subscribe(data => this.data$.next(data))
  }
}
