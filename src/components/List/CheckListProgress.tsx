import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

export default function CheckListProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 5
        }}
      >
        <Typography>1/1</Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: "90%"}}
        />
      </Box>
    </Box>
  );
}
