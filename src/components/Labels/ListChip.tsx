import React, { useState, FunctionComponent, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CardItem } from "../../types/boards";
import { useSelector } from "react-redux";
import { AppState } from "../../store";

interface IListChipProps {
  currentCard: CardItem;
}
const ListChip: FunctionComponent<IListChipProps> = (props) => {
  const { currentCard } = props;
  const labels = currentCard?.labels;

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
        sx={{ width: "500px" }}
      />

      )

    } </React.Fragment>
  
  );
};

export default ListChip;
