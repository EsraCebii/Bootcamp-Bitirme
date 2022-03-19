import { Box, Icon } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BoardCard from "../Board/BoardCard";
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

const users = ["Esra", "hakan"];

function BoardApp() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
            borderRadius: 1
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
        <Grid item xs={2} sm={4} md={4}>
          <BoardCard />
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Card sx={{ maxWidth: 345, m: 5 }}>
          

            <Box sx={{ textAlign: "center" , mt:9}}>
              <Link to="/addBoard">
                <Icon sx={{ fontSize: 50 }}>add_circle</Icon>
              </Link>
            </Box>

            <CardContent>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                Add a new Board
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="members">
                <GroupIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default BoardApp;
