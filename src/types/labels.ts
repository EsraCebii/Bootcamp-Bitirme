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
    payload: Label;
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
  interface GET_START {
    type: "GET_LABELS_START";
  }
  interface GET_SUCCESS {
    type: "GET_LABELS_SUCCESS";
    payload: Label[];
  }
  interface GET_ERROR {
    type: "GET_LABELS_ERROR";
  }
  export type LabelAction =
  | ADD_LABEL_START
  | ADD_LABEL_SUCCESS
  | ADD_LABEL_ERROR
  | DELETE_START
  | DELETE_SUCCESS
  | DELETE_ERROR
  | GET_START
  | GET_SUCCESS
  | GET_ERROR
  export type LabelDispatch = ThunkDispatch<LabelState, void, LabelAction>;