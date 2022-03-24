import { Comment, CommentDispatch, CommentForm } from "../../types/comments";
import api from "../../utils/api";

export const addComment =
(form: CommentForm) => async (dispatch: CommentDispatch) => {
  dispatch({ type: "ADD_COMMENT_START" });
  try {
    const response = await api().post<Comment>("/comment", form);
    dispatch({ type: "ADD_COMMENT_SUCCESS", payload: response.data });
  } catch {
    dispatch({ type: "ADD_COMMENT_ERROR" });
  }
};
export const deleteComment =
(id: number) => async (dispatch: CommentDispatch) => {
  dispatch({ type: "DELETE_COMMENT_START" });
  try {
    await api().delete<Comment>("/comment/"+ id);
    dispatch({ type: "DELETE_COMMENT_SUCCESS", payload: id });
  } catch {
    dispatch({ type: "DELETE_COMMENT_ERROR" });
  }
};