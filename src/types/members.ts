import { ThunkDispatch } from "redux-thunk";

export interface MemberState {
    data: Member[];
    loading: boolean;
    error: string;
}
export interface Member {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    boardId: number;
    userId: number;
}

export interface MemberForm {
    username: string;
    boardId: number;
}
interface GET_START {
    type: "GET_MEMBERS_START";
}
interface GET_SUCCESS {
    type: "GET_MEMBERS_SUCCESS";
    payload: Member[]

}
interface GET_ERROR {
    type: "GET_MEMBERS_ERROR";
}
interface ADD_START {
    type: "ADD_MEMBER_START";
  }
  
  interface ADD_SUCCESS {
    type: "ADD_MEMBER_SUCCESS";
    payload: Member;
  }
  interface ADD_ERROR {
    type: "ADD_MEMBER_ERROR";
  }
  interface DELETE_START {
    type: "DELETE_MEMBER_START";
}
interface DELETE_SUCCESS {
    type: "DELETE_MEMBER_SUCCESS";
    payload: Member['id'];

}
interface DELETE_ERROR {
    type: "DELETE_MEMBER_ERROR";
}


  export type MemberAction = 
  | GET_START
| GET_SUCCESS
| GET_ERROR
| ADD_START 
| ADD_SUCCESS 
| ADD_ERROR
| DELETE_START
| DELETE_SUCCESS
| DELETE_ERROR;


export type MemberDispatch = ThunkDispatch<MemberState, void, MemberAction>;