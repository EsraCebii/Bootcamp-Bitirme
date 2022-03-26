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
    case "ADD_LABEL_START":
      return { ...state, loading: true, error: "" };
    case "ADD_LABEL_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_LABEL_ERROR":
      return { ...state, loading: false, error: "Error adding label.. " };
    case "DELETE_LABEL_START":
      return { ...state, loading: true, error: "" };
    case "DELETE_LABEL_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.filter((label) => label.id !== action.payload),
      };
    case "DELETE_LABEL_ERROR":
      return { ...state, loading: false, error: "Error deleting member" };
    default:
      return state;
  }
};

export default labelReducer;
