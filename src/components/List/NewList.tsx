import { Button, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ListContent from "../List/ListContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

function NewList() {
  const [isAdd, setIsAdd] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [addCardMode, setAddCardMode] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleAddTitle = () => {
    setAddCardMode(true)
  }
  return (
    <>
      {!isAdd && (
        <Card sx={{ maxWidth: 345, m: 5, height: 30, p: 2, borderRadius: 3 }}>
          <Button startIcon={<AddIcon />} onClick={() => setIsAdd(true)}>
            Add a list
          </Button>
        </Card>
      ) }{
        isAdd && !addCardMode && (
        <Card sx={{ maxWidth: 345, m: 5, p: 2, borderRadius: 3 }}>
          <Box>
            <TextField
              required
              id="standard-required"
              label="List Title"
              variant="standard"
              sx={{ m: 1 }}
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
            />
            <CloseIcon sx={{mt:3}} />

            <Button
              variant="contained"
              sx={{ borderRadius: "50%", m: 2, bgcolor: "text.secondary" }}
              onClick={handleAddTitle}
            >
              Add
            </Button>
          </Box>
        </Card>
      )}
      {
        addCardMode && (
          <Card sx={{ maxWidth: 345, m: 5, borderRadius: 3, borderColor: 'grey.500' }}>
          <CardHeader
            action={
              <Box>
                <IconButton aria-label="more" onClick={handleOpenNavMenu}>
                  <MoreVertIcon />
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
                  <MenuItem onClick={handleCloseNavMenu}>
                    <IconButton size="small" disableRipple>
                      <DeleteIcon />
                      Remove List
                    </IconButton>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <IconButton size="small" disableRipple>
                      <DriveFileRenameOutlineIcon />
                      Rename List
                    </IconButton>
                  </MenuItem>
                </Menu>
              </Box>
            }
            title={listTitle}
          />
          <Button onClick={handleOpen}>
            <CardContent>
              <ListContent />
            </CardContent>
          </Button>
          <Divider />

          <CardActions disableSpacing>
            <IconButton aria-label="add a new board">
              <AddIcon />
            </IconButton>
            <Typography color="text.secondary">add a new board</Typography>
          </CardActions>
        </Card>
        )
      }
    </>
  );
}

export default NewList;
