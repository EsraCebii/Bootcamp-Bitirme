import React, { FunctionComponent, useEffect, useState }  from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Grid from "@mui/material/Grid";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useDispatch } from "react-redux";
import { MemberForm } from "../../types/members";
import { addMember, deleteMember } from "../../store/actions/MemberActions";
import { getBoard } from "../../store/actions/BoardActions";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



function MemberList() {
  const dispatch = useDispatch();
  const id = useSelector(
    (state: AppState) => state.boards.currentBoard.id
  );
  const emptyMemberForm: MemberForm = {
    username: "",
    boardId: id
  };
  const [memberForm, setMemberForm] = useState<MemberForm>(emptyMemberForm);
  const members = useSelector(
    (state: AppState) => state.boards.currentBoard.members
  );
  console.log(members);
  

  const handleAddMember = () => {
    dispatch(addMember(memberForm))
    setMemberForm(emptyMemberForm)
    dispatch(getBoard(id));
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <List
          dense
          sx={{
            minHeight: 360,
            minWidth: 200,
            bgcolor: "background.paper",
            m: 6,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom component="div" sx={{ my: 2 }}>
            Members
          </Typography>
          <Divider />
          {members.map((member) => {
            return (
              <>
                <ListItem key={member.username} disablePadding sx={{ my: 3 }}     secondaryAction={
                    <IconButton edge="end" aria-label="delete" onClick={() => dispatch(deleteMember(Number(member.BoardMember.id)))}>
                      <DeleteIcon />
                    </IconButton>
                  }>
                  <ListItemButton>
                    <AccountBoxOutlinedIcon sx={{ mx: 3 }} />
                    <ListItemText
                      id={member.username}
                      primary={member.username}
                    />
                  </ListItemButton>
                </ListItem>
              </>
            );
          })}
        </List>
      </Grid>
      <Grid item xs={8}>
        <Box
          sx={{
            typography: "body1",
            backgroundColor: "black",
            marginX: "auto",
            marginY: 10,
            width: "500px",
          }}
        >
          <Typography variant="h5" gutterBottom component="div">
            Add Member
          </Typography>

          <TextField
            fullWidth
            variant="outlined"
            label="username"
            value={memberForm.username} 
            onChange={(e) => setMemberForm({ ...memberForm, username: e.target.value })} 
            sx={{ marginY: 1 }}
          />
          <Button variant="contained" sx={{ marginY: 1 }} onClick={handleAddMember}>
            Add
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default MemberList;
