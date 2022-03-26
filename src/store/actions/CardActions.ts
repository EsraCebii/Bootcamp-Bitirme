import { CardDispatch, CardForm, Card, Label } from "../../types/card";
import { LabelForm } from "../../types/labels";

import api from "../../utils/api";


export const getCards = () => async (dispatch: CardDispatch) => {
  dispatch({ type: "GET_CARDS_START" });
  try {
    const response = await api().get<Card[]>(`card`);
    dispatch({ type: "GET_CARDS_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "GET_CARDS_ERROR" });
  }
};
export const getCard = (id: number) => async (dispatch: CardDispatch) => {
  dispatch({ type: "GET_CARD_START" });
  try {
    const response = await api().get<Card>("/card/" + id );
    dispatch({ type: "GET_CARD_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "GET_CARD_ERROR" });
  }
};
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

export const updateCard =
(form: Partial<CardForm>, cardId: number) => async (dispatch: CardDispatch) => {
  dispatch({ type: "UPDATE_CARD_START" });
  try {
    const response = await api().put<Card>("/card/"+ cardId,  form);
    dispatch({ type: "UPDATE_CARD_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "UPDATE_CARD_ERROR" });
  }
};

export const deleteCard =
(id: number) => async (dispatch: CardDispatch) => {
  dispatch({ type: "DELETE_CARD_START" });
  try {
    await api().delete<Card>("/card/"+ id);
    dispatch({ type: "DELETE_CARD_SUCCESS", payload: id });
  } catch {
    dispatch({ type: "DELETE_CARD_ERROR" });
  }
};
export const addLabel =
(form: LabelForm) => async (dispatch: CardDispatch) => {
  dispatch({ type: "ADD_LABEL_START" });
  try {
    const response = await api().post<Label>("/card-label", form);
    dispatch({ type: "ADD_LABEL_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_LABEL_ERROR" });
  }
};
export const deleteLabel =
(id: number) => async (dispatch: CardDispatch) => {
  dispatch({ type: "DELETE_LABEL_START" });
  try {
    await api().delete<Label>("/card-label/"+ id);
    dispatch({ type: "DELETE_LABEL_SUCCESS", payload: id });
  } catch {
    dispatch({ type: "DELETE_LABEL_ERROR" });
  }
};