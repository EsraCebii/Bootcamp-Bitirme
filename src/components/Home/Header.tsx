import React, { useEffect, useState }  from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Container from "@mui/material/Container";
import SettingsIcon from "@mui/icons-material/Settings";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import { Divider, Menu, MenuItem, TextField, Typography } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Board, BoardForm } from "../../types/boards";
import { deleteBoard, getBoard, updateBoard } from "../../store/actions/BoardActions";
import {  useNavigate } from "react-router-dom";
import GroupIcon from "@mui/icons-material/Group";
import MemberList from "../Members/MemberList";
import BoardArea from "../Board/BoardArea";


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

const emptyForm: BoardForm = {
  title: "",
};

const Header = () => {
  const board = useSelector((state: AppState) => state.boards.currentBoard);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
    null
  );
  const [member, setMember] = useState(false)
  
  const [form, setForm] = useState<BoardForm>(emptyForm);

  const { data } = useSelector((state: AppState) => state.user);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleDeleteBoard = () => {
    dispatch(deleteBoard(Number(board.id)))
    navigate("/boards");
  }
  const boardId= board.id
  const ownerId = board.ownerId
  const handleEditBoardTitle = () => {
    dispatch(updateBoard(form, boardId))
    dispatch(getBoard(boardId));
    handleClose()
    setForm(emptyForm)
  }
 
  
  return (
    <React.Fragment>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to="/boards">
              <Button sx={{ color: "white", display: "block" }}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <AssessmentIcon />
                  <Typography>Boards</Typography>
                </Box>
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button onClick={handleOpen}>
              <VisibilityIcon sx={{ mr: 1 }} />
              {board.title}
            </Button>
            <Modal
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
                    value={form.title} 
                    onChange={(e) => setForm({ ...form, title: e.target.value })} 
                  />
                  <IconButton onClick={handleEditBoardTitle}>
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
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <AccountBoxOutlinedIcon />
                  <Typography>{data.username}</Typography>
                </Box>
              </MenuItem>
             
              <Divider />

              <MenuItem onClick={handleCloseUserMenu}>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }} onClick={handleDeleteBoard}>
                  <DeleteOutlineIcon />
                  <Typography>Delete Board</Typography>
                </Box>
              </MenuItem>
            {
              ownerId && (
                <MenuItem >
              
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }} onClick={()=> setMember(true)}>
                  <GroupIcon />
                  <Typography>Members</Typography>
                </Box>
            
              </MenuItem>
              )
            }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    {
      member && (
        <MemberList />
      )
    }
    {
      !member && (
        <BoardArea  />
      )
    }
    </React.Fragment>
  );
};
export default Header;
