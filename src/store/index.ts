import { combineReducers } from "redux";
import { BoardState } from "../types/boards";
import { CardState } from "../types/card";

import { MemberState } from "../types/members";
import { UserState } from "../types/user";
import boardReducer from "./reducers/boardReducer";
import cardReducer from "./reducers/cardReducer";
import memberReducer from "./reducers/memberReducer";
import userReducer from "./reducers/userReducer";

export interface AppState {
    user: UserState;
    boards: BoardState;
    members: MemberState;
    cards: CardState;
    // lists: ListState;
}

const rootReducer = combineReducers<AppState>({
    user: userReducer,
    boards: boardReducer,
    members: memberReducer,
    cards: cardReducer,
    // lists: listReducer,

})

export default rootReducer;



