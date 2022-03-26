import { ThunkDispatch } from "redux-thunk";

export interface ListState {
  data: List[];
  loading: boolean;
  error: string;
  // currentList: List;
}
export interface List {
  id: number;
  order?: any;
  title: string;
  createdAt: any;
  updatedAt: any;
  boardId: number;
  cards: Card[];
  board: Board;
}
export interface ListForm {
  title: string;
  boardId: number;
}
export interface Board {
  id: number;
  title: string;
  createdAt: any;
  updatedAt: any;
  ownerId: number;
  members: Member[];
}
export interface Member {
  id: number;
  BoardMember: BoardMember;
}
export interface BoardMember {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  boardId: number;
  userId: number;
}
export interface Card {
  id: number;
  title: string;
  description?: any;
  duedate?: any;
  createdAt: Date;
  updatedAt: Date;
  listId: number;
  labels: Label[];
  checklists: CheckList[];
  comments: Comment[];
}
export interface Comment {
  cardId: number;
  message: StringConstructor;
}
export interface Label {
  cardId: number;
  labelId: number;
}
export interface CheckList {
  title: string;
  cardId: number;
}

interface GET_LISTS_START {
    type: "GET_LISTS_START";
}
interface GET_LISTS_SUCCESS {
    type: "GET_LISTS_SUCCESS";
    payload: List[]

}
interface GET_LISTS_ERROR {
    type: "GET_LISTS_ERROR";
}
interface GET_SUCCESS {
  type: "GET_LIST_SUCCESS";
  payload: List;
}
interface GET_ERROR {
  type: "GET_LIST_ERROR";
}
interface GET_START {
  type: "GET_LIST_START";
}
interface DELETE_ERROR {
  type: "DELETE_LIST_ERROR";
}
interface DELETE_START {
  type: "DELETE_LIST_START";
}

interface DELETE_SUCCESS {
  type: "DELETE_LIST_SUCCESS";
  payload: number;
}

interface ADD_START {
  type: "ADD_LIST_START";
}

interface ADD_SUCCESS {
  type: "ADD_LIST_SUCCESS";
  payload: List;
}
interface ADD_ERROR {
  type: "ADD_LIST_ERROR";
}
interface UPDATE_LIST_ERROR {
  type: "UPDATE_LIST_ERROR";
}
interface UPDATE_LIST_START {
  type: "UPDATE_LIST_START";
}

interface UPDATE_LIST_SUCCESS {
  type: "UPDATE_LIST_SUCCESS";
  payload: List;
}
export type ListAction =
  | GET_START
  | GET_SUCCESS
  | GET_ERROR
  | GET_LISTS_START
  | GET_LISTS_SUCCESS
  | GET_LISTS_ERROR
  | DELETE_START
  | DELETE_SUCCESS
  | DELETE_ERROR
  | ADD_START
  | ADD_SUCCESS
  | ADD_ERROR
  | UPDATE_LIST_START
  | UPDATE_LIST_SUCCESS
  | UPDATE_LIST_ERROR

export type ListDispatch = ThunkDispatch<ListState, void, ListAction>;
