
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


