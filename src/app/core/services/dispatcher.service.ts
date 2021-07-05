import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators'
import { ApplicationState } from '../interfaces/application-state';
import { Action, Dispatcher } from '../interfaces/dispatcher';
import { MessageService } from './message.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService implements Dispatcher<ApplicationState> {

  constructor(
    private us: UserService,
    private ms: MessageService
  ) { }

  state$: Observable<ApplicationState> = combineLatest([
    this.us.data$,
    this.ms.data$
  ]).pipe(
    map(obs$ => ({currentUser: null, users: obs$[0], messages: obs$[1]}))
  );
  action$ = new BehaviorSubject<Action> ({type: 'INIT', data: null});

  dispatch(action: any): void {
  }
}
