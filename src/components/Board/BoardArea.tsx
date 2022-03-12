import * as React from "react";
import Grid from "@mui/material/Grid";
import NewList from "../List/NewList";


export default function BoardArea() {


  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <NewList />
      </Grid>
    </Grid>
  );
}
