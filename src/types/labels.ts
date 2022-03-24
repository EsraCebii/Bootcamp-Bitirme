import { ThunkDispatch } from "redux-thunk";


export interface LabelState {
    data: Label[];
    loading: boolean;
    error: string;
  
  }
  export interface LabelForm {
    cardId: number;
    labelId: number;
  }
  export interface Label {
    id: number;
    title: string;
    color: string;
    updatedAt: Date;
    createdAt: Date;
  }
  interface ADD_LABEL_START {
    type: "ADD_LABEL_START";
  }
  
  interface ADD_LABEL_SUCCESS {
    type: "ADD_LABEL_SUCCESS";
    payload: Comment;
  }
  interface ADD_LABEL_ERROR {
    type: "ADD_LABEL_ERROR";
  }
  interface DELETE_ERROR {
    type: "DELETE_LABEL_ERROR";
  }
  interface DELETE_START {
    type: "DELETE_LABEL_START";
  }
  
  interface DELETE_SUCCESS {
    type: "DELETE_LABEL_SUCCESS";
    payload: number;
  }

  export type LabelAction =
  | ADD_LABEL_START
  | ADD_LABEL_SUCCESS
  | ADD_LABEL_ERROR
  | DELETE_START
  | DELETE_SUCCESS
  | DELETE_ERROR
  export type LabelDispatch = ThunkDispatch<LabelState, void, LabelAction>;