import { BehaviorSubject, Observable } from "rxjs";

export interface Action {
    type: string
    data: any
}

export interface Dispatcher<T> {
    state$: Observable<T>
    action$: BehaviorSubject<Action>

    dispatch(action: any): void
}
