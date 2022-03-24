import { CheckListAction, CheckListState } from "../../types/checkList";


const defaultState: CheckListState = {
  data: [],
  loading: false,
  error: "",
  items:[],
 
};

const listReducer = (state: CheckListState = defaultState, action: CheckListAction) => {
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
        default:
          return state;
      }
    };

export default listReducer;
