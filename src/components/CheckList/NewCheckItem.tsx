import { useState, FunctionComponent, useEffect } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { CheckItemForm, ICheckListItem } from "../../types/checkList";
import { addItem } from "../../store/actions/CheckListActions";
import { AppState } from "../../store";
import { useParams } from "react-router-dom";
import { getBoard } from "../../store/actions/BoardActions";

interface ICommentItemProps {
  item: any;
}

const NewCheckItem: FunctionComponent<ICommentItemProps> = (props) => {
  const { item } = props;
  const {id }    = useParams();
  const [checked, setChecked] = useState([0]);
  const emptyForm: CheckItemForm = {
    checklistId: item.id,
    title: "",
    isChecked: false,
  };
  const [form, setForm] = useState<CheckItemForm>(emptyForm);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(form));
    dispatch(getBoard(Number(id)))
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleAddItem} >
          <AddIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense >
        <TextField
          fullWidth
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Add an item"
          variant="outlined"
          sx={{ ml: 7 }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default NewCheckItem;
