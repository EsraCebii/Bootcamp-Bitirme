import { combineReducers } from "redux";
import { UserState } from "../types/user";
import userReducer from "./reducers/userReducer";

interface AppState {
    user: UserState;
    // boards: any;
    // lists: any;
    // cards :any;
    // checkLists: any;
}

const rootReducer = combineReducers<AppState>({
    user: userReducer,
    // boards: () =>{},
    // lists: () => {},
    // cards: () => {},
    // checkLists: () => {}

})

export default rootReducer;



