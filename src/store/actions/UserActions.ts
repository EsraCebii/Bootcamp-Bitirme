import { LoginForm, RegisterForm, User, UserDispatch } from "../../types/user";
import api from "../../utils/api";

export const login = (creds: LoginForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const response = await api().post<User>("/auth/login", creds);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
      localStorage.setItem("token", response.data.token);
    } catch {
      dispatch({ type: "LOGIN_ERROR" });
    }
  };

  export const register = (creds: RegisterForm) => async (dispatch: UserDispatch) => {
    dispatch({ type: "REGISTER_START" });
    try {
      const response = await api().post<User>("/auth/register", creds);
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
      localStorage.setItem("token", response.data.token);
    } catch {
      dispatch({ type: "REGISTER_ERROR" });
    }
  };