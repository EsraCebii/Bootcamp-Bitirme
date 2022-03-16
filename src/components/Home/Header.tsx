import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Container from "@mui/material/Container";
import SettingsIcon from '@mui/icons-material/Settings';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import { Menu, MenuItem, TextField, Typography } from "@mui/material";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const style = {
  position: "absolute" as "absolute",
  top: "10%",
  left: "53%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 12,
  p: 1,
};

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/boards">
              <Button sx={{ color: "white", display: "block" }}>
                <Box sx={{ display: "flex",
              flexDirection: "row", gap:1}}>
                <AssessmentIcon  />
                <Typography >Boards</Typography>
                </Box>
                
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button onClick={handleOpen}>
              <VisibilityIcon sx={{mr:1}}  />
              Untitled Board
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <TextField
                    id="standard-helperText"
                    defaultValue="Untitle Board"
                    variant="standard"
                  />
                  <IconButton>
                    <CheckIcon />
                  </IconButton>
                </Box>
              </Fade>
            </Modal>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem  onClick={handleCloseUserMenu}>
                <Box sx={{ display: "flex",
              flexDirection: "row", gap:1}}>
                <DeleteOutlineIcon  />
                <Typography>Delete Board</Typography>
                </Box>
                </MenuItem>
         
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
