import { ThunkDispatch } from "redux-thunk";


export interface CommentState {
    data: Comment[];
    loading: boolean;
    error: string;
  
  }
  export interface CommentForm {
    cardId: number;
    message: string;
  }
  export interface Comment {
    id: number;
    cardId: number;
    message: string;
    authorId: number;
    updatedAt: Date;
    createdAt: Date;
  }
  interface ADD_COMMENT_START {
    type: "ADD_COMMENT_START";
  }
  
  interface ADD_COMMENT_SUCCESS {
    type: "ADD_COMMENT_SUCCESS";
    payload: Comment;
  }
  interface ADD_COMMENT_ERROR {
    type: "ADD_COMMENT_ERROR";
  }
  interface DELETE_ERROR {
    type: "DELETE_COMMENT_ERROR";
  }
  interface DELETE_START {
    type: "DELETE_COMMENT_START";
  }
  
  interface DELETE_SUCCESS {
    type: "DELETE_COMMENT_SUCCESS";
    payload: number;
  }

  export type CommentAction =
  | ADD_COMMENT_START
  | ADD_COMMENT_SUCCESS
  | ADD_COMMENT_ERROR
  | DELETE_START
  | DELETE_SUCCESS
  | DELETE_ERROR
  export type CommentDispatch = ThunkDispatch<CommentState, void, CommentAction>;