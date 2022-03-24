import { useState, FunctionComponent, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import TextField from "@mui/material/TextField";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CardItem } from "../../types/boards";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { deleteComment } from "../../store/actions/CommentActions";

interface ICommentListProps {
  card: CardItem;
}
const CommentList: FunctionComponent<ICommentListProps> = (props) => {
  const { card } = props;
//   const comments = useSelector(
//     (state: AppState) => state.comments.data
//   );
const comments= card.comments
  console.log(comments,"comments");
  const dispatch = useDispatch();

 
  


  return (
    <List sx={{ width: "100%", mt:5 }}>
      {comments.map((comment) => {
        const labelId = comment.id;

        return (
          <ListItem
            key={comment.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteComment(Number(comment.id)))}>
                  <DeleteOutlinedIcon />
                </IconButton>
              }
           
            disablePadding
          >
            <ListItemButton
              role={undefined}
           
              dense
            >
              <ListItemIcon>
                <AccountCircleOutlinedIcon
                />
              </ListItemIcon>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="outlined"
                defaultValue={comment.message}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
export default CommentList;
