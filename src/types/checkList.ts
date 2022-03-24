import { ThunkDispatch } from "redux-thunk";

export interface CheckListState {
  data: CheckListItem[];
  loading: boolean;
  error: string;
  items: CheckItem[]
}
export interface CheckListItem {
    id: number;
    cardId: number;
    title: string;
    updatedAt: Date;
    createdAt: Date;
}
export interface CheckItemForm {
  checklistId: number;
  title: string;
  isChecked: boolean;
}
export interface CheckItem {
  checklistId: number;
  title: string;
  isChecked: boolean;
  id: number;
  updatedAt: Date;
  createdAt: Date;
}

export interface CheckListItemForm {
    title: string;
    cardId: number;
}
interface ADD_SUCCESS {
    type: "ADD_SUCCESS";
    payload: CheckListItem;
  }
  interface ADD_ERROR {
    type: "ADD_ERROR";
  }
  interface ADD_START {
    type: "ADD_START";
  }
  interface ADD_ITEM_SUCCESS {
    type: "ADD_ITEM_SUCCESS";
    payload: CheckItem;
  }
  interface ADD_ITEM_ERROR {
    type: "ADD_ITEM_ERROR";
  }
  interface ADD_ITEM_START {
    type: "ADD_ITEM_START";
  }
  export type CheckListAction =
  | ADD_START
  | ADD_SUCCESS
  | ADD_ERROR
  | ADD_ITEM_START
  | ADD_ITEM_SUCCESS
  | ADD_ITEM_ERROR
  export type CheckListDispatch = ThunkDispatch<CheckListState, void, CheckListAction>;