export interface UserState {
    modal: boolean;
    name?: String | null;
}

export interface AppState {
    user: UserState;
}
