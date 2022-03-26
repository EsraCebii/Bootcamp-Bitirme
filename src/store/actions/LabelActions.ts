
import { Label, LabelDispatch, LabelForm } from "../../types/labels";
import api from "../../utils/api";


export const getLabels = () => async (dispatch: LabelDispatch) => {
    dispatch({ type: "GET_LABELS_START" });
    try {
      const response = await api().get<Label[]>(`label`);
      dispatch({ type: "GET_LABELS_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_LABELS_ERROR" });
    }
  };


  export const addLabel =
(form: LabelForm) => async (dispatch: LabelDispatch) => {
  dispatch({ type: "ADD_LABEL_START" });
  try {
    const response = await api().post<Label>("/card-label", form);
    dispatch({ type: "ADD_LABEL_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_LABEL_ERROR" });
  }
};
export const deleteLabel =
(id: number) => async (dispatch: LabelDispatch) => {
  dispatch({ type: "DELETE_LABEL_START" });
  try {
    await api().delete<Label>("/card-label/"+ id);
    dispatch({ type: "DELETE_LABEL_SUCCESS", payload: id });
  } catch {
    dispatch({ type: "DELETE_LABEL_ERROR" });
  }
};