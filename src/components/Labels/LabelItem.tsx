import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import IconButton from "@mui/material/IconButton";
import { useState, FunctionComponent, useEffect } from "react";
import { Label, LabelForm } from "../../types/labels";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { addLabel, deleteLabel, getCard } from "../../store/actions/CardActions";

interface ILabelProps {
  label: Label;
}
const LabelItem: FunctionComponent<ILabelProps> = (props) => {
  const { label } = props;
  const dispatch = useDispatch();
  const currentCard = useSelector((state: AppState) => state.cards.currentCard);
  
  const emptyForm: LabelForm = {
    cardId: currentCard.id,
    labelId: label.id,
  };

  const [form, setForm] = useState<LabelForm>(emptyForm);


  const handleCheckboxChange = (e: any) => {
    if (e.target.checked) {
      setForm({ ...form, labelId: Number(e.target.id) });
      dispatch(addLabel(form));
      dispatch(getCard(Number(currentCard.id)))
    } else {
      console.log(e.target)
      let deletedLabel = currentCard.labels.find(
        (label: any) => e.target.id == label.id
      );
      dispatch(deleteLabel(Number(deletedLabel.CardLabel.id)));
      dispatch(getCard(Number(currentCard.id)))
    }
  
  };
  return (
    <ListItem
      key={label.id}
      secondaryAction={
        <IconButton edge="end" aria-label="labels">
          <LabelOutlinedIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"  
            id={label.id.toString()}
            name={label.title}
            checked={Boolean(
              currentCard.labels.find((c: any) => c.id === label.id)
            )}
            onChange={handleCheckboxChange}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={label.title} />
      </ListItemButton>
    </ListItem>
  );
};

export default LabelItem;
