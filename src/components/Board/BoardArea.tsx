import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import NewList from "../List/NewList";
import ListItem from "../List/ListItem";
import { AppState } from "../../store";


const  BoardArea = () => {
  const lists = useSelector((state: AppState) => state.boards.currentBoard.lists);
  console.log(lists);
  
 
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
        {lists.map((list, i) => (
          <Grid item xs={2} sm={4} md={4}>
            <ListItem key={i} list={list} />
          </Grid>
        ))}
      <Grid item xs={2} sm={4} md={4}>
        <NewList />
      </Grid>
    </Grid>
  );
}
export default BoardArea;
