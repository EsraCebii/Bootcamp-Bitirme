import { useState, FunctionComponent, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { CardItem } from "../../types/boards";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { CheckItemForm, CheckListItem } from "../../types/checkList";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { addItem } from "../../store/actions/CheckListActions";

interface ICommentItemProps {
    item: CheckListItem;
  }

const NewCheckItem: FunctionComponent<ICommentItemProps> = (props) => {
    const {item} = props;
    const [checked, setChecked] = useState([0]);
    const emptyForm: CheckItemForm = {
        checklistId: item.id,
        title: "",
        isChecked: false,
      };
      const [form, setForm] = useState<CheckItemForm>(emptyForm);
      const dispatch = useDispatch();
     

      const handleAddItem = () => {
        dispatch(addItem(form))
      }

  return (
    <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <AddIcon />
      </IconButton>
    }
    disablePadding
  >
    
    <ListItemButton role={undefined} dense onClick={handleAddItem}>
      <TextField
        fullWidth
        value={form.title}
        onChange={(e) =>
            setForm({ ...form, title: e.target.value })
        }
        placeholder="Add an item"
        variant="outlined"
        sx={{ ml: 7 }}
      />
    </ListItemButton>
  </ListItem>
  )
}

export default NewCheckItem