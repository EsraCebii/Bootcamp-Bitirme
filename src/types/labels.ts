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
  | GET_START
  | GET_SUCCESS
  | GET_ERROR
  export type LabelDispatch = ThunkDispatch<LabelState, void, LabelAction>;