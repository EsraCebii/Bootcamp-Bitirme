import { useState, FunctionComponent, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { CardItem } from "../../types/boards";
import { useSelector } from "react-redux";
import { AppState } from "../../store";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Progress from "./Progress";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckItem from "./CheckItem";
import NewCheckItem from "./NewCheckItem";

interface ICheckListProps {
  card: CardItem;
}
const CheckList: FunctionComponent<ICheckListProps> = (props) => {
  const { card } = props;
  const checkLists = useSelector((state: AppState) => state.checkLists.data);

  return (
    <>
      <List sx={{ width: "100%" }}>
        {checkLists.map((item) => {
          return (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 4,
                }}
              >
                <CheckBoxOutlinedIcon />
                <Typography
                  sx={{ ml: 1, mb: 3 }}
                  variant="subtitle1"
                  gutterBottom
                  component="div"
                >
                  {item.title}
                </Typography>
              </Box>
              <Progress />
                <CheckItem item={item} />
            <NewCheckItem item={item} />
            </Box>
          );
        })}
      </List>
    </>
  );
};
export default CheckList;
