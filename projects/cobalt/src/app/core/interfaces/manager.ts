import { BehaviorSubject, Observable } from "rxjs";

export interface Manager<T> {
    data$: BehaviorSubject<T[]>
    create (data: Partial<T>): Observable<T|null> 
}

