import { Member } from "../../types/boards";
import { MemberAction, MemberState } from "../../types/members";

const defaultState: MemberState = {
  data: [],
  loading: false,
  error: "",
};
const memberReducer = (
  state: MemberState = defaultState,
  action: MemberAction
) => {
  switch (action.type) {
    case "GET_MEMBERS_START":
      return { ...state, loading: true, error: "" };
    case "GET_MEMBERS_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "GET_MEMBERS_ERROR":
      return { ...state, loading: false, error: "Error fetching members" };
    case "ADD_MEMBER_START":
      return { ...state, loading: true, error: "" };
    case "ADD_MEMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [action.payload, ...state.data],
      };
    case "ADD_MEMBER_ERROR":
      return { ...state, loading: false, error: "Error adding members.. " };
    case "DELETE_MEMBER_START":
      return { ...state, loading: true, error: "" };
    case "DELETE_MEMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        data: state.data.filter((member) => member.id !== action.payload),
      };
    case "DELETE_MEMBER_ERROR":
      return { ...state, loading: false, error: "Error deleting member" };
    default:
      return state;
  }
};

export default memberReducer;
