import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Manager } from '../interfaces/manager';
import { Message } from '../interfaces/message';

const API = 'http://localhost:5050/messages'


@Injectable()
export class MessageService implements Manager<Message> {

  constructor() { }
  data$ = new BehaviorSubject<Message[]>([]);

  create (data: Partial<Message>): Observable<Message|null> {
    return of(null)
  }
}
