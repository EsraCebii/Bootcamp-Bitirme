import { Box, Icon } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupIcon from "@mui/icons-material/Group";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AssessmentIcon from "@mui/icons-material/Assessment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Board } from "../../types/boards";

const users = ["Esra", "hakan"];

interface IBoardCardProps {
  board: Board;
}

const BoardCard: FunctionComponent<IBoardCardProps> = (props) => {
  const { board } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [checked, setChecked] = useState([0]);

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
      <Card sx={{ maxWidth: 345, m: 5 }}>
        <Box sx={{}}>
          <IconButton
            aria-label="share"
            sx={{ m: 2 }}
            onClick={handleOpenNavMenu}
          >
            <GroupAddIcon />
          </IconButton>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <List>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                  <MenuItem>
                    <ListItem key={value} disablePadding>
                      <ListItemButton
                        role={undefined}
                        onClick={handleToggle(value)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          id={labelId}
                          primary={`esra ${value + 1}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  </MenuItem>
                );
              })}
            </List>
          </Menu>
        </Box>
        <Link to={`/board/${board.id}`}>
        <Box sx={{ textAlign: "center" }}>
          <AssessmentIcon sx={{ fontSize: 50 }} />
        </Box>
        <CardContent>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            {board.title}
          </Typography>
        </CardContent>
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="members">
            <GroupIcon />

          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}

export default BoardCard;
