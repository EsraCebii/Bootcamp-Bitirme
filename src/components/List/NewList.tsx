import * as React from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { ListForm } from "../../types/boards";
import { addList, getBoard } from "../../store/actions/BoardActions";

function NewList() {
  const boardId = useSelector((state: AppState) => state.boards.currentBoard.id);
  
  const [isAdd, setIsAdd] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [addCardMode, setAddCardMode] = useState(false);
 
  const [addCardTitleMode, setAddCardTitleMode] = useState(false);
  const dispatch = useDispatch();
  const defaultForm: ListForm = {
    title: "",
    boardId: 0,
  };
  const [form, setForm] = useState<ListForm>(defaultForm);

 

  const handleAddListTitle = () => {
    listTitle && setAddCardMode(true);
    dispatch(addList(form))
    setForm(defaultForm)
    dispatch(getBoard(Number(boardId)))
  };


  return (
    <>
      {!isAdd && (
        <Card sx={{ maxWidth: 345, m: 5, height: 30, p: 2, borderRadius: 3 }}>
          <Button startIcon={<AddIcon />} onClick={() => setIsAdd(true)}>
            Add a list
          </Button>
        </Card>
      )}

      {isAdd && !addCardMode && (
        <Card sx={{ maxWidth: 345, m: 5, p: 2, borderRadius: 3 }}>
          <Box>
            <TextField
              required
              id="standard-required"
              label="List Title"
              variant="standard"
              sx={{ m: 1 }}
              value={form.title}
              onChange={(e) => setForm({ boardId: Number(boardId), title: e.target.value })}
            />
            <CloseIcon sx={{ mt: 3 }} onClick={() => { setForm({ ...form, title: "" }); setForm(defaultForm)}} />

            <Button
              variant="contained"
              sx={{ borderRadius: "18px", m: 2, bgcolor: "text.secondary" }}
              onClick={handleAddListTitle}
            >
              Add
            </Button>
          </Box>
        </Card>
      )}
      
    </>
  );
}

export default NewList;
