import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { connectUser, loadMessages, loadMessagesFailure, loadMessagesSuccess } from '../actions';
import { ApplicationState } from '../interfaces/application-state';
import { Message } from '../interfaces/message';
import { User } from '../interfaces/user';

const initialCurrentUser: User|null = null
const initialMessages: Message|null = null

const currentUserReducer = createReducer<User|null, Action> (
  initialCurrentUser,
  on(connectUser, (currentUser, action) => ({ name: action.data }))
)

const loadingReducer = createReducer<Boolean, Action> (
  false,
  on(loadMessages, () => true),
  on(loadMessagesSuccess, () => false),
  on(loadMessagesFailure, () => false)
)


const messageReducer = createReducer<Message[], Action> (
  [],
  on(loadMessagesSuccess, (previousMessages, action) => action.messages )
)

function usersReducer (users: User[] = [], action: Action) {
  console.log(action)
  return users
}

export const reducers: ActionReducerMap<ApplicationState> = {
  currentUser: currentUserReducer,
  users: usersReducer,
  messages: messageReducer,
  loading: loadingReducer
};

export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];