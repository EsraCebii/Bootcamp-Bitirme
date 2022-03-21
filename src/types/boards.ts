import { ThunkDispatch } from "redux-thunk";

export interface BoardState {
  data: Board[];
  loading: boolean;
  error: string;
  currentBoard: Board;
}
export interface Board {
  id: number;
  title: string;
  createdAt: any;
  updatedAt: any;
  ownerId: number;
  lists: any[];
  owner: Owner;
  members: Member[];
}

export interface List {
  id: number;
  order?: any;
  title: string;
  createdAt: any;
  updatedAt: any;
  boardId: number;
  cards: CardItem[];
}
export interface CardItem {
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
export interface ListForm {
  title: string;
  boardId: number;
}
export interface CardForm {
  title: string;
  listId: number;
}
export interface Member {
  id: number;
  username: string;
  createdAt: Date;
  updatedAt: Date;
  BoardMember: BoardMember;
}

export interface BoardMember {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  boardId: number;
  userId: number;
}
export interface Owner {
  id: number;
  username: string;
  createdAt: any;
  updatedAt: any;
}
export interface BoardForm {
  title: string;
}
interface GET_START {
  type: "GET_BOARDS_START";
}
interface GET_SUCCESS {
  type: "GET_BOARDS_SUCCESS";
  payload: Board[];
}
interface GET_ERROR {
  type: "GET_BOARDS_ERROR";
}
interface GET_BOARD_START {
  type: "GET_BOARD_START";
}
interface GET_BOARD_SUCCES {
  type: "GET_BOARD_SUCCES";
  payload: Board;
}
interface GET_BOARD_ERROR {
  type: "GET_BOARD_ERROR";
}

interface ADD_START {
  type: "ADD_BOARD_START";
}

interface ADD_SUCCESS {
  type: "ADD_BOARD_SUCCESS";
  payload: Board;
}
interface ADD_ERROR {
  type: "ADD_BOARD_ERROR";
}
interface UPDATE_ERROR {
  type: "UPDATE_BOARD_ERROR";
}
interface UPDATE_START {
  type: "UPDATE_BOARD_START";
}

interface UPDATE_SUCCESS {
  type: "UPDATE_BOARD_SUCCESS";
  payload: Board;
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
interface DELETE_ERROR {
  type: "DELETE_BOARD_ERROR";
}
interface DELETE_START {
  type: "DELETE_BOARD_START";
}

interface DELETE_SUCCESS {
  type: "DELETE_BOARD_SUCCESS";
  payload: number;
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
interface ADD_LIST_START {
  type: "ADD_LIST_START";
}

interface ADD_LIST_SUCCESS {
  type: "ADD_LIST_SUCCESS";
  payload: List;
}
interface ADD_LIST_ERROR {
  type: "ADD_LIST_ERROR";
}
interface ADD_CARD_START {
  type: "ADD_CARD_START";
}

interface ADD_CARD_SUCCESS {
  type: "ADD_CARD_SUCCESS";
  payload: CardItem;
}
interface ADD_CARD_ERROR {
  type: "ADD_CARD_ERROR";
}
export type BoardAction =
  | GET_START
  | GET_SUCCESS
  | GET_ERROR
  | GET_BOARD_START
  | GET_BOARD_SUCCES
  | GET_BOARD_ERROR
  | ADD_START
  | ADD_SUCCESS
  | ADD_ERROR
  | ADD_LIST_START
  | ADD_LIST_SUCCESS
  | ADD_LIST_ERROR
  | ADD_CARD_START
  | ADD_CARD_SUCCESS
  | ADD_CARD_ERROR
  | UPDATE_START
  | UPDATE_SUCCESS
  | UPDATE_ERROR
  | UPDATE_LIST_START
  | UPDATE_LIST_SUCCESS
  | UPDATE_LIST_ERROR
  | DELETE_START
  | DELETE_SUCCESS
  | DELETE_ERROR
  | DELETE_LIST_START
  | DELETE_LIST_SUCCESS
  | DELETE_LIST_ERROR;

export type BoardDispatch = ThunkDispatch<BoardState, void, BoardAction>;
