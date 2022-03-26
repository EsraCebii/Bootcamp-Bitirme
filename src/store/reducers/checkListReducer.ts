import { CheckListAction, CheckListState } from "../../types/checkList";

const defaultState: CheckListState = {
  data: [],
  loading: false,
  error: "",
  items: [],
};

const listReducer = (
  state: CheckListState = defaultState,
  action: CheckListAction
) => {
  switch (action.type) {
    case "ADD_START":
      return { ...state, loading: true, error: "" };
    case "ADD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_ERROR":
      return { ...state, loading: false, error: "Error adding checklists.. " };
    case "ADD_ITEM_START":
      return { ...state, loading: true, error: "" };
    case "ADD_ITEM_SUCCESS":
      return {
        ...state,
        loading: false,
        items: [action.payload, ...state.data],
      };
    case "ADD_ITEM_ERROR":
      return { ...state, loading: false, error: "Error adding items.. " };
    case "DELETE_LIST_START":
      return { ...state, loading: true, error: "" };
    case "DELETE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.filter((list) => list.id !== action.payload),
      };
    case "DELETE_LIST_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error deleting checklist.. ",
      };
    case "DELETE_ITEM_START":
      return { ...state, loading: true, error: "" };
    case "DELETE_ITEM_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.items.filter((item: any) => item.id !== action.payload),
      };
    case "DELETE_ITEM_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error deleting item.. ",
      };
    case "UPDATE_ITEM_START":
      return { ...state, loading: true, error: "" };
    case "UPDATE_ITEM_SUCCESS":
      return {
        ...state,
        loading: false,
        items: state.items.map((item: any) =>
          item.isChecked === action.payload ? action.payload : item
        ),
      };
    case "UPDATE_ITEM_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error updating item.. ",
      };
    default:
      return state;
  }
};

export default listReducer;
