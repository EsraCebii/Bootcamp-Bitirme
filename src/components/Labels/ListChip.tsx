import React, { useState, FunctionComponent, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CardItem } from "../../types/boards";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import Chip from "@mui/material/Chip";
import { LabelForm } from "../../types/labels";
import { addLabel, deleteLabel, getCard } from "../../store/actions/CardActions";

interface IListChipProps {
  currentCard: CardItem;
}
const ListChip: FunctionComponent<IListChipProps> = (props) => {
  const { currentCard } = props;
  const labels = currentCard?.labels;
  const dispatch = useDispatch();

  return (
    <React.Fragment>
    {
      labels?.length > 0 &&   (
        <Autocomplete
        multiple
        limitTags={1}
        id="card-labels"
        options={labels}
        getOptionLabel={(option) => option.title}
        value={labels}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Labels"
            placeholder="Select multiple Labels"
            fullWidth
            sx={{ m: 2, minWidth: 750 }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              style={{ backgroundColor: option.color }}
              label={option.title}
              color={"error"}
              {...getTagProps({ index })}
            />
          ))
        }
        sx={{ width: "500px" }}
      />

      )

    } </React.Fragment>
  
  );
};

export default ListChip;
