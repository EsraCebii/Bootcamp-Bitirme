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
import { useSelector } from "react-redux";
import { AppState } from "../../store";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { CheckItemForm, CheckListItem } from "../../types/checkList";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface ICommentItemProps {
    item: CheckListItem;
  }

const CheckItem: FunctionComponent<ICommentItemProps> = (props) => {
    const {item} = props;
    const [checked, setChecked] = useState([0]);
    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }   
        setChecked(newChecked);
      };

  return (
    <ListItem
    key={item.id}
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    }
    disablePadding
  >
    <ListItemButton
      role={undefined}
      // onClick={handleToggle(value)}
      dense
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          // checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
          // inputProps={{ "aria-labelledby": item.id }}
        />
      </ListItemIcon>
      <TextField
        InputProps={{
          readOnly: true,
        }}
        fullWidth
        variant="outlined"
        defaultValue={item.title}
      />
    </ListItemButton>
  </ListItem>
  )
}

export default CheckItem