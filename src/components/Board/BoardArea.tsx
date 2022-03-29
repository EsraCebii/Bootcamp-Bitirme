import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import NewList from "../List/NewList";
import ListItem from "../List/ListItem";
import { AppState } from "../../store";
import { useEffect, useState } from "react";
import {
  dragList,
  getLists,
  updateList,
} from "../../store/actions/ListActions";
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
  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    console.log(result, "result", destination, "destination", source, "source");

    if (!destination) {
      return;
    }
    
    const sourceList = lists.find(
      (list: any) => Number(list.id) === Number(source.droppableId)
    );

    const destionationList = lists.find(
      (list: any) => list.id === destination.droppableId
    );
    const draggingCard = sourceList?.cards?.filter(
      (card: any) => card.id === draggableId
    );
   
    if (source.droppableId === destination.droppableId) {
      console.log("step-2 calıstı");
      const draggingCard = sourceList?.cards?.splice(source.index, 1);
      draggingCard !== undefined && destionationList?.cards.splice(destination.index, 0, draggingCard);      
      const sourceListId = sourceList?.id;   
      setForm({ id: Number(sourceListId), list: destionationList });
      console.log(sourceListId, "sourceListId", form, sourceList)
      dispatch(dragList(form, Number(sourceListId)));
      setForm(emptyForm);
    } else {
      sourceList?.cards?.splice(source.index,1);
      destionationList?.cards.splice(destination.index, 0, draggingCard);
      const sourceListId = sourceList?.id;
      setForm({ id: Number(sourceListId), list: sourceList })
      dispatch(dragList(form, Number(sourceListId)))
      setForm({ id: Number(destionationList?.id), list: destionationList })
      destionationList !== undefined &&  dispatch(dragList(form, Number(destionationList.id)))
     
    }
  };

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
