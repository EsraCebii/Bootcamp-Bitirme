import { ThunkDispatch } from "redux-thunk";

export interface CardState {
  data: Card[];
  loading: boolean;
  error: string;
  // currentList: List;
}
export interface Card {
    id: number;
    title: string;
    description?: any;
    order?: any;
    duedate?: any;
    createdAt: Date;
    updatedAt: Date;
    listId: number;
    labels: any[];
    checklists: any[];
    comments: any[];
}

export interface CardForm {
    title: string;
    listId: number;
  }

  interface ADD_START {
    type: "ADD_CARD_START";
  }
  
  interface ADD_SUCCESS {
    type: "ADD_CARD_SUCCESS";
    payload: Card;
  }
  interface ADD_ERROR {
    type: "ADD_CARD_ERROR";
  }
  export type CardAction =
  | ADD_START
  | ADD_SUCCESS
  | ADD_ERROR
  export type CardDispatch = ThunkDispatch<CardState, void, CardAction>;