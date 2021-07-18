import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { loadMessages, loadMessagesSuccess } from "../actions";
import { MessageService } from "../services/message.service";

@Injectable()
export class messageEffects {
    constructor (
        private action$: Actions,
        private ms: MessageService
        ) {}

    loadMessages$ = createEffect(() => this.action$.pipe(
        ofType(loadMessages),
        mergeMap(
            () => this.ms.load().pipe(
                map( messages => loadMessagesSuccess({messages}) )
            )
        )
     ))
}