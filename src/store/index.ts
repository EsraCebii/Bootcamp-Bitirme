import { combineReducers } from "redux";
import { BoardState } from "../types/boards";

import { MemberState } from "../types/members";
import { UserState } from "../types/user";
import boardReducer from "./reducers/boardReducer";
import memberReducer from "./reducers/memberReducer";
import userReducer from "./reducers/userReducer";

export interface AppState {
    user: UserState;
    boards: BoardState;
    members: MemberState;
    // lists: ListState;
}

const rootReducer = combineReducers<AppState>({
    user: userReducer,
    boards: boardReducer,
    members: memberReducer,
    // lists: listReducer,

})

export default rootReducer;



