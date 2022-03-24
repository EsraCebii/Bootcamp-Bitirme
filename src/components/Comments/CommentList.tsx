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
import { Typography } from "@mui/material";
import { getCards } from "../../store/actions/CardActions";

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

  useEffect(() => {
    dispatch(getCards())
  }, [comments])
  

  return (
    <List sx={{ width: "100%", mt:5 }}>
      {comments.map((comment) => {
       

        return (
          <ListItem
          sx={{width: '100%' , minWidth:'760px', ml:-10}}
            key={comment.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() =>  dispatch(deleteComment(Number(comment.id)))}>
                  <DeleteOutlinedIcon />
                </IconButton>
              }
           
            disablePadding
          >
            <ListItemButton
              role={undefined}
           
              dense
            >
              <ListItemIcon sx={{ml:-3, mr:2}}>
                <AccountCircleOutlinedIcon sx={{mr:1}}
                />
                  <Typography variant="overline" display="block" gutterBottom>
                  {comment.author.username}
      </Typography>
              
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
