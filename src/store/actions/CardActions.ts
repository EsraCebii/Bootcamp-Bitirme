import { CardDispatch, CardForm } from "../../types/card";

import api from "../../utils/api";

export const addCard =
(form: CardForm) => async (dispatch: CardDispatch) => {
  dispatch({ type: "ADD_CARD_START" });
  try {
    const response = await api().post<any>("/card", form);
    dispatch({ type: "ADD_CARD_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_CARD_ERROR" });
  }
};