import { List, ListDispatch } from "../../types/lists";
import api from "../../utils/api";

export const getLists = (boardId: List['boardId']) => async (dispatch: ListDispatch) => {
    dispatch({ type: "GET_LISTS_START" });
    try {
      const response = await api().get<any>(`list?boardId=${boardId}`);
      dispatch({ type: "GET_LISTS_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_LISTS_ERROR" });
    }
  };
export const getList = (id: number) => async (dispatch: ListDispatch) => {
    dispatch({ type: "GET_LIST_START" });
    try {
      const response = await api().get<List>("/list/" + id );
      dispatch({ type: "GET_LIST_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_LIST_ERROR" });
    }
  };


  export const deleteList =
  (id: number) => async (dispatch: ListDispatch) => {
    dispatch({ type: "DELETE_LIST_START" });
    try {
      await api().delete<List>("/list/"+ id);
      dispatch({ type: "DELETE_LIST_SUCCESS", payload: id });
    } catch {
      dispatch({ type: "DELETE_LIST_ERROR" });
    }
  };