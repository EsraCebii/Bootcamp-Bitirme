
import { MemberDispatch, MemberForm, Member } from "../../types/members";
import api from "../../utils/api";

export const getMembers = (boardId: Member['boardId']) => async (dispatch: MemberDispatch) => {
    dispatch({ type: "GET_MEMBERS_START" });
    try {
      const response = await api().get<Member[]>(`/board-member?boardId=${boardId}`);
      response.data.sort((a, b) => b.id - a.id);
      dispatch({ type: "GET_MEMBERS_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "GET_MEMBERS_ERROR" });
    }
  };

export const addMember =
  (form: MemberForm) => async (dispatch: MemberDispatch) => {
    dispatch({ type: "ADD_MEMBER_START" });
    try {
      const response = await api().post<Member>("/board-member", form);
      dispatch({ type: "ADD_MEMBER_SUCCESS", payload: response.data });
    } catch {
      dispatch({ type: "ADD_MEMBER_ERROR" });
    }
  };
  export const deleteMember = ( id: Member['id']) => async (dispatch: MemberDispatch) => {
    dispatch({ type: "DELETE_MEMBER_START" });
    try {
      await api().delete<Member>("/board-member/" + id);
      dispatch({ type: "DELETE_MEMBER_SUCCESS", payload: id });
    } catch {
      dispatch({ type: "DELETE_MEMBER_ERROR" });
    }
  };
