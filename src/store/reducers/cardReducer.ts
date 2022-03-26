import { Card, CardAction, CardState } from "../../types/card";

const defaultState: CardState = {
  data: [],
  loading: false,
  error: "",
  currentCard: {
    id: 0,
    title: "",
    createdAt: "",
    updatedAt: "",
    listId: 0,
    labels: [],
    checklists: [],
    comments: [],
  },
};
const cardReducer = (state: CardState = defaultState, action: CardAction) => {
  switch (action.type) {
    case "GET_CARDS_START":
      return { ...state, loading: true, error: "" };
    case "GET_CARDS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_CARDS_ERROR":
      return { ...state, loading: false, error: "Error fetching cards" };
      case "GET_CARD_START":
        return { ...state, loading: true, error: "" };
      case "GET_CARD_SUCCESS":
        return { ...state, loading: false, currentCard: action.payload };
      case "GET_CARD_ERROR":
        return { ...state, loading: false, error: "Error fetching board" };
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
    case "UPDATE_CARD_START":
      return { ...state, loading: true, error: "" };
    case "UPDATE_CARD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.map((card) =>
          card.id === action.payload.id ? action.payload : card
        ),
      };
    case "UPDATE_CARD_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error updating card.. ",
      };
    case "DELETE_CARD_START":
      return { ...state, loading: true, error: "" };
    case "DELETE_CARD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.filter((card) => card.id !== action.payload),
      };
    case "DELETE_CARD_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error deleting card.. ",
      };
      case "ADD_LABEL_START":
        return { ...state, loading: true, error: "" };
      case "ADD_LABEL_SUCCESS":
        return {
              ...state,
              loading: false,
              currentCard: {
                ...state.currentCard,
                labels: [ action.payload, ...state.currentCard.labels]
              }
            };
      case "ADD_LABEL_ERROR":
        return { ...state, loading: false, error: "Error adding label.. " };
        case "DELETE_LABEL_START":
          return { ...state, loading: true, error: "" };
        case "DELETE_LABEL_SUCCESS":
          return {
            ...state,
            loading: false,
            currentCard: {
              ...state.currentCard,
              labels: state.currentCard.labels.filter((label) => label.id !== action.payload)
            }
          };
        case "DELETE_LABEL_ERROR":
          return { ...state, loading: false, error: "Error deleting member" };
    default:
      return state;
  }
};

export default cardReducer;
