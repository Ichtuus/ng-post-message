import { createAction, props } from "@ngrx/store";
import { Message } from "../interfaces/message";

export const connectUser = createAction (
    '[CURRENT USER] CONNECT', // type de l'action
    props<{ data: string }> ()
)

export const loadMessages = createAction (
    '[MESSAGES] LOAD REQUEST'
)

export const loadMessagesSuccess = createAction (
    '[MESSAGES] LOAD REQUEST SUCCESS',
    props<{ messages: Message[] }> ()
)

export const loadMessagesFailure = createAction (
    '[MESSAGES] LOAD REQUEST FAILURE',
    props<{ reason: string }> ()
)