import { combineReducers } from "redux";
import { BoardState } from "../types/boards";
import { UserState } from "../types/user";
import boardReducer from "./reducers/boardReducer";
import userReducer from "./reducers/userReducer";

export interface AppState {
    user: UserState;
    boards: BoardState;
    // lists: any;
    // cards :any;
    // checkLists: any;
}

const rootReducer = combineReducers<AppState>({
    user: userReducer,
    boards: boardReducer,
    // lists: () => {},
    // cards: () => {},
    // checkLists: () => {}

})

export default rootReducer;



