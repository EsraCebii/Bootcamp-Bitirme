import { ThunkDispatch } from "redux-thunk";

export interface CheckListState {
  data: ICheckListItem[];
  loading: boolean;
  error: string;
  items: any;
}
export interface ICheckListItem {
    id: number;
    cardId: number;
    title: string;
    updatedAt: Date;
    createdAt: Date;
    items: CheckItem[];
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

export interface ItemForm {
  checklistId: number;
  isChecked: boolean;
  title: string;

}
interface ADD_SUCCESS {
    type: "ADD_SUCCESS";
    payload: ICheckListItem;
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
  interface DELETE_LIST_ERROR {
    type: "DELETE_LIST_ERROR";
  }
  interface DELETE_LIST_START {
    type: "DELETE_LIST_START";
  }
  
  interface DELETE_LIST_SUCCESS {
    type: "DELETE_LIST_SUCCESS";
    payload: number;
  }
  interface UPDATE_ERROR {
    type: "UPDATE_CHECKLIST_ERROR";
  }
  interface UPDATE_START {
    type: "UPDATE_CHECKLIST_START";
  }
  
  interface UPDATE_SUCCESS {
    type: "UPDATE_CHECKLIST_SUCCESS";
    payload: any;
  }
  interface UPDATE_ITEM_ERROR {
    type: "UPDATE_ITEM_ERROR";
  }
  interface UPDATE_ITEM_START {
    type: "UPDATE_ITEM_START";
  }
  
  interface UPDATE_ITEM_SUCCESS {
    type: "UPDATE_ITEM_SUCCESS";
    payload: CheckItem;
  }
  interface DELETE_ITEM_ERROR {
    type: "DELETE_ITEM_ERROR";
  }
  interface DELETE_ITEM_START {
    type: "DELETE_ITEM_START";
  }
  
  interface DELETE_ITEM_SUCCESS {
    type: "DELETE_ITEM_SUCCESS";
    payload: number;
  }
  export type CheckListAction =
  | UPDATE_START
  | UPDATE_SUCCESS
  | UPDATE_ERROR
  | UPDATE_ITEM_START
  | UPDATE_ITEM_SUCCESS
  | UPDATE_ITEM_ERROR
  | ADD_START
  | ADD_SUCCESS
  | ADD_ERROR
  | ADD_ITEM_START
  | ADD_ITEM_SUCCESS
  | ADD_ITEM_ERROR
  | DELETE_LIST_START
  | DELETE_LIST_SUCCESS
  | DELETE_LIST_ERROR
  | DELETE_ITEM_START
  | DELETE_ITEM_SUCCESS
  | DELETE_ITEM_ERROR;
  
  export type CheckListDispatch = ThunkDispatch<CheckListState, void, CheckListAction>;