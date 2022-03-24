import { Board, BoardDispatch, BoardForm, CardForm, CardItem, List, ListForm } from "../../types/boards";
import api from "../../utils/api";

export const getBoards = () => async (dispatch: BoardDispatch) => {
  dispatch({ type: "GET_BOARDS_START" });
  try {
    const response = await api().get<Board[]>("/board");
    dispatch({ type: "GET_BOARDS_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "GET_BOARDS_ERROR" });
  }
};
export const getBoard = (id: number) => async (dispatch: BoardDispatch) => {
  dispatch({ type: "GET_BOARD_START" });
  try {
    const response = await api().get<Board>("/board/" + id );
    dispatch({ type: "GET_BOARD_SUCCES", payload: response.data });
  } catch {
    dispatch({ type: "GET_BOARD_ERROR" });
  }
};

export const addBoard =
  (form: BoardForm) => async (dispatch: BoardDispatch) => {
    dispatch({ type: "ADD_BOARD_START" });
    try {
      const response = await api().post<Board>("/board", form);
      dispatch({ type: "ADD_BOARD_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "ADD_BOARD_ERROR" });
    }
  };
  export const addList =
  (form: ListForm) => async (dispatch: BoardDispatch) => {
    dispatch({ type: "ADD_LIST_START" });
    try {
      const response = await api().post<List>("/list", form);
      dispatch({ type: "ADD_LIST_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "ADD_LIST_ERROR" });
    }
  };
  export const addCard =
  (form: CardForm) => async (dispatch: BoardDispatch) => {
    dispatch({ type: "ADD_CARD_START" });
    try {
      const response = await api().post<CardItem>("/card", form);
      dispatch({ type: "ADD_CARD_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "ADD_CARD_ERROR" });
    }
  };
 
  export const updateBoard =
  (form: Partial<BoardForm>, boardId: number) => async (dispatch: BoardDispatch) => {
    dispatch({ type: "UPDATE_BOARD_START" });
    try {
      const response = await api().put<Board>("/board/"+ boardId,  form);
      dispatch({ type: "UPDATE_BOARD_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "UPDATE_BOARD_ERROR" });
    }
  };
  export const updateList =
  (form: Partial<ListForm>, listId: number) => async (dispatch: BoardDispatch) => {
    dispatch({ type: "UPDATE_BOARD_START" });
    try {
      const response = await api().put<any>("/list/"+ listId,  form);
      dispatch({ type: "UPDATE_BOARD_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "UPDATE_BOARD_ERROR" });
    }
  };
  export const deleteBoard =
  (boardId: number) => async (dispatch: BoardDispatch) => {
    dispatch({ type: "DELETE_BOARD_START" });
    try {
      await api().delete<Board>("/board/"+ boardId);
      dispatch({ type: "DELETE_BOARD_SUCCESS", payload: boardId });
    } catch {
      dispatch({ type: "DELETE_BOARD_ERROR" });
    }
  };
  export const deleteList =
  (id: number) => async (dispatch: BoardDispatch) => {
    dispatch({ type: "DELETE_LIST_START" });
    try {
      await api().delete<List>("/list/"+ id);
      dispatch({ type: "DELETE_LIST_SUCCESS", payload: id });
    } catch {
      dispatch({ type: "DELETE_LIST_ERROR" });
    }
  };
