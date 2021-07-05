import { Message } from "./message";
import { User } from "./user";

export interface ApplicationState {
    currentUser : User|null
    users: User[]
    messages: Message[]
}
