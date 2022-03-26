import { CheckItem, CheckItemForm, CheckListDispatch, CheckListItemForm, ICheckListItem } from "../../types/checkList";
import { CheckList } from "../../types/lists";
import api from "../../utils/api";

export const addCheckList =
(form: CheckListItemForm) => async (dispatch: CheckListDispatch) => {
  dispatch({ type: "ADD_START" });
  try {
    const response = await api().post<ICheckListItem>("/checklist", form);
    dispatch({ type: "ADD_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_ERROR" });
  }
};

export const addItem =
(form: CheckItemForm) => async (dispatch: CheckListDispatch) => {
  dispatch({ type: "ADD_ITEM_START" });
  try {
    const response = await api().post<CheckItem>("/checklist-item", form);
    dispatch({ type: "ADD_ITEM_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_ITEM_ERROR" });
  }
};

export const deleteCheckList =
(id: number) => async (dispatch: CheckListDispatch) => {
  dispatch({ type: "DELETE_LIST_START" });
  try {
    await api().delete<CheckList>("/checklist/"+ id);
    dispatch({ type: "DELETE_LIST_SUCCESS", payload: id });
  } catch {
    dispatch({ type: "DELETE_LIST_ERROR" });
  }
};
export const updateCheckList =
(title: string, id: number) => async (dispatch: CheckListDispatch) => {
  dispatch({ type: "UPDATE_CHECKLIST_START" });
  try {
    const response = await api().put<any>(`checklist/${id}`, title);
    dispatch({ type: "UPDATE_CHECKLIST_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "UPDATE_CHECKLIST_ERROR" });
  }
};

export const updateCheckItem =
(isChecked: boolean, id: number) => async (dispatch: CheckListDispatch) => {
  dispatch({ type: "UPDATE_ITEM_START" });
  try {
    const response = await api().put<any>(`checklist-item/${id}`, isChecked);
    dispatch({ type: "UPDATE_ITEM_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "UPDATE_ITEM_ERROR" });
  }
};

export const deleteCheckListItem =
(id: number) => async (dispatch: CheckListDispatch) => {
  dispatch({ type: "DELETE_ITEM_START" });
  try {
    await api().delete<CheckList>("/checklist-item/"+ id);
    dispatch({ type: "DELETE_ITEM_SUCCESS", payload: id });
  } catch {
    dispatch({ type: "DELETE_ITEM_ERROR" });
  }
};