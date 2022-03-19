import { ThunkDispatch } from "redux-thunk";
export interface User {
    username: string;
    password: string;
    token: string;
}
export interface LoginForm {
    username: string;
    password: string;
}
export interface RegisterForm {
    username: string;
    password: string;
    passwordConfirm: string;

}

export interface UserState {
    data: User,
    loading: boolean,
    error: string,
}
interface LOGIN_START {
    type: "LOGIN_START";
}
interface LOGIN_SUCCESS {
    type: "LOGIN_SUCCESS";
    payload: User;
}
interface LOGIN_ERROR {
    type: "LOGIN_ERROR";
    
}
interface REGISTER_START {
    type: "REGISTER_START";
}
interface REGISTER_SUCCESS {
    type: "REGISTER_SUCCESS";
    payload: User;
}
interface REGISTER_ERROR {
    type: "REGISTER_ERROR";
    
}
export type  UserAction = LOGIN_START | LOGIN_SUCCESS | LOGIN_ERROR | REGISTER_START | REGISTER_SUCCESS | REGISTER_ERROR;
export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;