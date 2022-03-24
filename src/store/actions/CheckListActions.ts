import { CheckItem, CheckItemForm, CheckListDispatch, CheckListItem, CheckListItemForm } from "../../types/checkList";
import api from "../../utils/api";

export const addCheckList =
(form: CheckListItemForm) => async (dispatch: CheckListDispatch) => {
  dispatch({ type: "ADD_START" });
  try {
    const response = await api().post<CheckListItem>("/checklist", form);
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