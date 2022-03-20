import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function Loading() {
  return (
    <Box sx={{ display: 'flex', maxWidth: 345, m: 5}}>
    <CircularProgress />
    <Typography variant="h6" gutterBottom component="div">
        Loading
      </Typography>
  </Box>
  );
}

export default Loading;