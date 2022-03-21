import { CardAction, CardState } from "../../types/card";


const defaultState: CardState = {
  data: [],
  loading: false,
  error: "",
};
const cardReducer = (
  state: CardState = defaultState,
  action: CardAction
) => {
  switch (action.type) {
    case "ADD_CARD_START":
      return { ...state, loading: true, error: "" };
    case "ADD_CARD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_CARD_ERROR":
      return { ...state, loading: false, error: "Error adding cards.. " };
    default:
      return state;
  }
};

export default cardReducer;
