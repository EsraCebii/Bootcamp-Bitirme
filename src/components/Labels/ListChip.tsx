import { useState, FunctionComponent, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { CardItem } from "../../types/boards";

interface IListChipProps {
  card: CardItem;
}
const ListChip: FunctionComponent<IListChipProps> = (props) => {
  const { card } = props;
  const labels = card.labels;

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994, color: "#84b6eb" },
    { title: "The Godfather", year: 1972, color: "#3e4b9e" },
    { title: "The Godfather: Part II", year: 1974, color: "#fbca04" },
  ];

  return (
    <Autocomplete
      multiple
      limitTags={1}
      id="multiple-limit-tags"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[1]]}
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
  );
};

export default ListChip;
