import { LabelAction, LabelState } from "../../types/labels";

const defaultState: LabelState = {
  data: [],
  loading: false,
  error: "",
};
const labelReducer = (
  state: LabelState = defaultState,
  action: LabelAction
) => {
  switch (action.type) {
    case "GET_LABELS_START":
      return { ...state, loading: true, error: "" };
    case "GET_LABELS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_LABELS_ERROR":
      return { ...state, loading: false, error: "Error fetching labels..." };
    default:
      return state;
  }
};

export default labelReducer;
