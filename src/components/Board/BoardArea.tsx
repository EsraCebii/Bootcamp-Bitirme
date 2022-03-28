import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import NewList from "../List/NewList";
import ListItem from "../List/ListItem";
import { AppState } from "../../store";
import { useEffect, useState } from "react";
import { dragList, getLists, updateList } from "../../store/actions/ListActions";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { DragForm } from "../../types/lists";
import { ListForm } from "../../types/boards";

const BoardArea = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLists(Number(id)));
  }, []);

  const emptyForm: DragForm = {
    id: 0,
    list: {},
  };
  const [form, setForm] = useState<DragForm>(emptyForm);

  const lists = useSelector((state: AppState) => state.lists.data);
  const onDragEnd = (result:any) => {
    const {destinaion, source, draggableId} =result;
    console.log(result, "result", destinaion, "destinaion",source,"source");

    if(!destinaion) {
      return;
    }
    const sourceList = lists[source.droppableId];
    const destionationList = lists[destinaion.droppableId]
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];
    if(source.droppableId === destinaion.droppableId ) {
      console.log("eşit")
      // sourceList.cards.splice(source.index, 1)
      // destionationList.cards.splice(destinaion.index, 0, draggingCard)
      // const sourceListId = sourceList.id;
      // setForm({ id: Number(sourceListId), list: destionationList })
      // dispatch(dragList(form, sourceListId))
      // setForm(emptyForm)
    } else {
      console.log("else")
      // sourceList.cards.splice(source.index,1);
      // destionationList.cards.splice(destinaion.index, 0, draggingCard);
      // const sourceListId = sourceList.id;
      // setForm({ id: Number(sourceListId), list: sourceList })
      // dispatch(dragList(form, sourceListId))
      // setForm({ id: Number(destionationList.id), list: destionationList })
      // dispatch(dragList(form, destionationList.id))

    }
  
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {lists.map((list, i) => (
        <ListItem key={i} list={list} />
      ))}
      <Grid item xs={2} sm={4} md={4}>
        <NewList />
      </Grid>
    </Grid>
    </DragDropContext>
  );
};
export default BoardArea;
