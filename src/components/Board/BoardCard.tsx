import { Box, Icon } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import GroupIcon from "@mui/icons-material/Group";
import Menu from "@mui/material/Menu";
import AssessmentIcon from "@mui/icons-material/Assessment";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { Board } from "../../types/boards";
import MemberModal from "./MemberModal";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

interface IBoardCardProps {
  board: Board;
}

const BoardCard: FunctionComponent<IBoardCardProps> = (props) => {
  const { board } = props;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345, m: 5 }}>
        <Box sx={{ mx: 4, my: 6 }}></Box>
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
          <IconButton aria-label="members" onClick={handleOpenNavMenu}>
            <GroupIcon />
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
            {board.members.length > 0 ? (
              <List>
                {board.members.map((member,i) => {
                  return <MemberModal member={member} key={i} />;
                })}
              </List>
            ) : (
              <MenuItem>
                <ListItem disablePadding>
                  <ListItemText primary="no members" />
                </ListItem>
              </MenuItem>
            )}
          </Menu>
        </CardActions>
      </Card>
    </>
  );
};

export default BoardCard;
