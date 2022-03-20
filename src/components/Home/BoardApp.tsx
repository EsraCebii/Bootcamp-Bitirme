import { Box, Icon } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BoardCard from "../Board/BoardCard";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addBoard, getBoards } from "../../store/actions/BoardActions";
import { AppState } from "../../store";
import Loading from "../../utils/Loading";

function BoardApp() {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.boards.data);
  const loading = useSelector((state: AppState) => state.boards.loading);
  const handleCreateBoard = () => {
    dispatch(addBoard({ title: "Untitled Board" }));
  };

  React.useEffect(() => {
    dispatch(getBoards());
  }, []);

  return (
    <>
      <Typography component="div">
        <Box
          sx={{
            fontSize: "h4.fontSize",
            m: 5,
            textAlign: "center",
            color: "warning.main",
            fontWeight: "bold",
            borderRadius: 1,
          }}
        >
          Scrumboard App
        </Box>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {loading && (
          <Grid item xs={2} sm={4} md={4}>
          <Loading />
        </Grid>

        )}
        {data.map((board, i) => (
          <Grid item xs={2} sm={4} md={4}>
            <BoardCard key={i} board={board} />
          </Grid>
        ))}

        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345, mt: 5 }} onClick={handleCreateBoard}>
            <Box sx={{ textAlign: "center", mt: 9 }}>
              <Link to="/newBoard">
                <Icon sx={{ fontSize: 50 }}>add_circle</Icon>
              </Link>
            </Box>

            <CardContent>
              <Typography variant="h6" sx={{ textAlign: "center", mb: 5 }}>
                Add a new Board
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default BoardApp;
