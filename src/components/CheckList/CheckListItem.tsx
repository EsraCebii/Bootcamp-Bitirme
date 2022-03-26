import { useState, FunctionComponent } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useDispatch} from "react-redux";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { deleteCheckListItem, updateCheckItem } from "../../store/actions/CheckListActions";
import { getBoard } from "../../store/actions/BoardActions";
import { useParams } from "react-router-dom";

interface ICommentItemProps {
  item: any;
}

const CheckListItem: FunctionComponent<ICommentItemProps> = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const {id }    = useParams();

  const [checked, setChecked] = useState<boolean>(item.isChecked);
  
  const handleChangeCheckbox = (id:number) => {
    setChecked(!checked);
    dispatch(updateCheckItem(checked,id))
  };
  
  const handleDeleteItem = (id: any) => {
    dispatch(deleteCheckListItem(id))
    dispatch(getBoard(Number(id)))
  }

  return (
    <>
          <ListItem
            key={item.id}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteItem(item.id)}>
                <DeleteOutlineOutlinedIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
           
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked} onChange={() => handleChangeCheckbox(item.id)}
                  disableRipple
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              </ListItemIcon>
              <TextField
                InputProps={{
                  readOnly: true,
                }}
                fullWidth
                variant="outlined"
                value={item.title}
              />
            </ListItemButton>
          </ListItem>
    </>
  );
};

export default CheckListItem;
