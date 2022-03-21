import { BoardAction, BoardState } from "../../types/boards";

const defaultState: BoardState = {
  data: [],
  loading: false,
  error: "",
  currentBoard: {
    id: 0,
    title: "",
    ownerId: 0,
    lists: [],
    createdAt: "",
    updatedAt: "",
    owner: {
      id: 0,
      username: "",
      createdAt: "",
      updatedAt: "",
    },
    members: [],
  },
};
const boardReducer = (
  state: BoardState = defaultState,
  action: BoardAction
) => {
  switch (action.type) {
    case "GET_BOARDS_START":
      return { ...state, loading: true, error: "" };
    case "GET_BOARDS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_BOARDS_ERROR":
      return { ...state, loading: false, error: "Error fetching boards" };
      case "GET_BOARD_START":
        return { ...state, loading: true, error: "" };
      case "GET_BOARD_SUCCES":
        return { ...state, loading: false, currentBoard: action.payload };
      case "GET_BOARD_ERROR":
        return { ...state, loading: false, error: "Error fetching board" };
    case "ADD_BOARD_START":
      return { ...state, loading: true, error: "" };
    case "ADD_BOARD_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_LIST_ERROR":
      return { ...state, loading: false, error: "Error adding list.. " };
      case "ADD_LIST_START":
        return { ...state, loading: true, error: "" };
      case "ADD_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          currentBoard: {...state.currentBoard, lists:[action.payload, ...state.currentBoard.lists]},
        };
      case "ADD_BOARD_ERROR":
        return { ...state, loading: false, error: "Error adding boards.. " };
      case "UPDATE_BOARD_START":
        return { ...state, loading: true, error: "" };
      case "UPDATE_BOARD_SUCCESS":
        return {
          ...state,
          loading: false,
          data: state.data.map((board) =>
          board.id === action.payload.id ? action.payload : board
          ),
        };
      case "UPDATE_BOARD_ERROR":
        return {
          ...state,
          loading: false,
          error: "Error updating board.. ",
        };
        case "UPDATE_LIST_START":
          return { ...state, loading: true, error: "" };
        case "UPDATE_LIST_SUCCESS":
          return {
            ...state,
            loading: false,
            data: state.currentBoard.lists.map((list) =>
            list.id === action.payload.id ? action.payload : list
            ),
          };
        case "UPDATE_LIST_ERROR":
          return {
            ...state,
            loading: false,
            error: "Error updating list.. ",
          };
        case "DELETE_BOARD_START":
          return { ...state, loading: true, error: "" };
        case "DELETE_BOARD_SUCCESS":
          return {
            ...state,
            loading: false,
            data: state.data.filter(board =>
              board.id !== action.payload
            ),
          };
        case "DELETE_BOARD_ERROR":
          return {
            ...state,
            loading: false,
            error: "Error deleting board.. ",
          };
          case "DELETE_LIST_START":
            return { ...state, loading: true, error: "" };
          case "DELETE_LIST_SUCCESS":
            return {
              ...state,
              loading: false,
              data: state.currentBoard.lists.filter(list =>
                list.id !== action.payload
              ),
            };
          case "DELETE_LIST_ERROR":
            return {
              ...state,
              loading: false,
              error: "Error deleting list.. ",
            };
    default:
      return state;
  }
};

export default boardReducer;
