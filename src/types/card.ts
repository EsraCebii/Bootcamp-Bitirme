import { ThunkDispatch } from "redux-thunk";

export interface CardState {
  data: Card[];
  loading: boolean;
  error: string;
  currentCard: Card;

}
export interface CardLabel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  cardId: number;
  labelId: number;
}
export interface CardForm {
  title: string;
  listId: number;
  description?: string;
  duedate?: Date;
  order?: number;

}
export interface Label {
  id: number;
  title: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
  CardLabel: CardLabel;
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
  interface GET_CARDS_START {
    type: "GET_CARDS_START";
  }
  interface GET_CARDS_SUCCESS {
    type: "GET_CARDS_SUCCESS";
    payload: Card[];
  }
  interface GET_CARDS_ERROR {
    type: "GET_CARDS_ERROR";
  }
  interface GET_CARD_START {
    type: "GET_CARD_START";
  }
  interface GET_CARD_SUCCESS {
    type: "GET_CARD_SUCCESS";
    payload: Card;
  }
  interface GET_CARD_ERROR {
    type: "GET_CARD_ERROR";
  }
  interface UPDATE_ERROR {
    type: "UPDATE_CARD_ERROR";
  }
  interface UPDATE_START {
    type: "UPDATE_CARD_START";
  }
  
  interface UPDATE_SUCCESS {
    type: "UPDATE_CARD_SUCCESS";
    payload: Card;
  }
  interface DELETE_ERROR {
    type: "DELETE_CARD_ERROR";
  }
  interface DELETE_START {
    type: "DELETE_CARD_START";
  }
  
  interface DELETE_SUCCESS {
    type: "DELETE_CARD_SUCCESS";
    payload: number;
  }

  export type CardAction =
  | UPDATE_START
  | UPDATE_SUCCESS
  | UPDATE_ERROR
  | ADD_START
  | ADD_SUCCESS
  | ADD_ERROR
  | GET_CARDS_START
  | GET_CARDS_SUCCESS
  | GET_CARDS_ERROR
  | GET_CARD_START
  | GET_CARD_SUCCESS
  | GET_CARD_ERROR
  | DELETE_START
  | DELETE_SUCCESS
  | DELETE_ERROR
  export type CardDispatch = ThunkDispatch<CardState, void, CardAction>;