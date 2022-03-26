import { useState, FunctionComponent, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { CardItem } from "../../types/boards";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { ICheckListItem } from "../../types/checkList";
import Item from "./Item";

interface ICheckListProps {
  currentCard: CardItem;
}

const CheckList: FunctionComponent<ICheckListProps> = (props) => {
  const { currentCard } = props;
  const checkLists = currentCard?.checklists;
  console.log(checkLists, "checkLists");

  return (
    <>
      <List sx={{ width: "100%" }}>
        { checkLists?.map((item) => 
           <Item item={item} key={item.id} />
        )}
      </List>
    </>
  );
};
export default CheckList;
