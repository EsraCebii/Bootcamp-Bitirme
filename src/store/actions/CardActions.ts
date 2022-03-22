import { CardDispatch, CardForm, Card } from "../../types/card";

import api from "../../utils/api";

export const addCard =
(form: CardForm) => async (dispatch: CardDispatch) => {
  dispatch({ type: "ADD_CARD_START" });
  try {
    const response = await api().post<Card>("/card", form);
    dispatch({ type: "ADD_CARD_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_CARD_ERROR" });
  }
};

export const getCards = (listId: Card['listId']) => async (dispatch: CardDispatch) => {
  dispatch({ type: "GET_CARDS_START" });
  try {
    const response = await api().get<Card>(`card?listId=${listId}`);
    dispatch({ type: "GET_CARDS_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "GET_CARDS_ERROR" });
  }
};