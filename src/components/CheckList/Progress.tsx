import { useState, FunctionComponent, useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";



interface IProgressProps {
  item: any;
}

 const Progress: FunctionComponent<IProgressProps> = (props) => {
   const {item} = props;
  const [progress, setProgress] = useState(0);

  const complatedTaskCount = item.items.filter(
    (item: any) => item.isChecked === true
  ).length;

  useEffect(() => {
    changeProgressBar();
  });

  const changeProgressBar = () => {
    let progressBarResult = (complatedTaskCount / item.items.length) * 100;
    setProgress(progressBarResult);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 5
        }}
      >
        <p>
          {" "}
          {complatedTaskCount} / {item.items.length}{" "}
        </p>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ width: "90%"}}
        />
      </Box>
    </Box>
  );
}
export default Progress;
