import { useState, FunctionComponent } from "react";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { Menu, MenuItem, Typography } from "@mui/material";
import Progress from "./Progress";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import NewCheckItem from "./NewCheckItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { deleteCheckList, updateCheckList } from "../../store/actions/CheckListActions";
import CheckListItem from "./CheckListItem";
import { useParams } from "react-router-dom";


interface IListItemProps {
    item: any;
  }
  
const Item: FunctionComponent<IListItemProps> = (props) => {
    const { item } = props;
    const {id }    = useParams();
    const dispatch = useDispatch();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    
    const [openEditModal, setOpenEditModal] = useState(false);
    const handleOpenEditModal = () => {
      setOpenEditModal(true);
    };
    const handleCloseEditModal = () => {
      setOpenEditModal(false);
    };
    const [title, setTitle] = useState(item.title);

    const handleUpdate = () => {
      dispatch(updateCheckList(title, Number(item.id)));
      handleCloseEditModal();

    }

  return (
    <Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "space-around",
        marginTop: 4,
      }}
    >
      <Box  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <CheckBoxOutlinedIcon />
      {
        openEditModal ? (
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <TextField
              id="check-list-title"
              value={title} 
              onChange={(e) => setTitle(e.target.value )} 
              required
              label="CheckList title"
              variant="standard"
              sx={{ m: 0.5 }}
            ></TextField>
            <IconButton  onClick={handleUpdate}>
            <CheckIcon /></IconButton>
          </Box>
        ) : (
          <Typography
          sx={{ ml: 1, mb: 3 }}
          variant="subtitle1"
          gutterBottom
          component="div"
        >
          {item.title}
        </Typography>
        )
      }
    
      </Box>
      <Box sx={{ flexGrow: 0 }}>
      <IconButton
         onClick={handleOpenNavMenu}
        size="small"
        sx={{mr:0}}
      >
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
        <IconButton size="small" disableRipple onClick={() => dispatch(deleteCheckList(Number(item.id)))} >
          <DeleteIcon />
          Delete checklist
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="small"
          onClick={handleOpenEditModal}
          disableRipple
        
        >
          <DriveFileRenameOutlineIcon  />
          Rename checklist
        </IconButton>
      </MenuItem>
    </Menu>
    <Box>
  </Box>
      </Box>
    </Box>
    <Progress item={item} />
    {
      item.items.map((item:any) => (
       <CheckListItem item={item} />
      ))
    }
    <NewCheckItem item={item} />
  </Box>
  )
}

export default Item