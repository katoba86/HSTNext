import { UserState } from "@Interfaces/AppState";

export const TACTION_SET_NAME: string = "app/user/SET_NAME";
// export const TACTION_MODAL: string = "app/user/MODAL";

const initialState: UserState = { name: "Kai", modal: false };

export const setName = (username: string) => ({
    type: TACTION_SET_NAME,
    payload: username,
});

type UserAction = ReturnType<typeof setName>;
// type UserAction = ReturnType<typeof login | typeof logout>;

export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case TACTION_SET_NAME:
            console.log("Test2");
            return { ...state, name: action.payload };
        default:
            return state;
    }
}
