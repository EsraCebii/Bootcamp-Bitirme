import { ListAction, ListState } from "../../types/lists";

const defaultState: ListState = {
  data: [],
  loading: false,
  error: "",
  // currentList: {
  //   id: 0,
  //   order: 0,
  //   title: "",
  //   createdAt: 0,
  //   updatedAt: 0,
  //   boardId: 0,
  //   cards: [],
  //   board: {
  //     id: 0,
  //     title: "",
  //     createdAt: 0,
  //     updatedAt: 0,
  //     ownerId: 0,
  //     members: [],
  //   },
  // },
};

const listReducer = (state: ListState = defaultState, action: ListAction) => {
  switch (action.type) {
    case "GET_LISTS_START":
      return { ...state, loading: true, error: "" };
    case "GET_LISTS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_LISTS_ERROR":
      return { ...state, loading: false, error: "Error fetching lists" };
    // case "GET_LIST_START":
    //   return { ...state, loading: true, error: "" };
    // case "GET_LIST_SUCCESS":
    //   return { ...state, loading: false, currentList: action.payload };
    // case "GET_LIST_ERROR":
    //   return { ...state, loading: false, error: "Error fetching list" };
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
        error: "Error deleting list.. ",
      };
    case "ADD_LIST_START":
      return { ...state, loading: true, error: "" };
    case "ADD_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_LIST_ERROR":
      return { ...state, loading: false, error: "Error adding list.. " };
    case "UPDATE_LIST_START":
      return { ...state, loading: true, error: "" };
    case "UPDATE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.map((board) =>
          board.id === action.payload.id ? action.payload : board
        ),
      };
    case "UPDATE_LIST_ERROR":
      return {
        ...state,
        loading: false,
        error: "Error updating list.. ",
      };
    default:
      return state;
  }
};

export default listReducer;
