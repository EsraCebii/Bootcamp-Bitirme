import { Button, formLabelClasses, Paper, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState, FunctionComponent, useEffect } from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ListContent from "../Cards/ListContent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { CardForm, List, ListForm } from "../../types/boards";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppState } from "../../store";
import { addCard, getCards } from "../../store/actions/CardActions";
import { deleteList, updateList } from "../../store/actions/ListActions";
import Grid from "@mui/material/Grid";
import { Droppable } from "react-beautiful-dnd";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface IListItemProps {
  list: List;
}

const ListItem: FunctionComponent<IListItemProps> = (props) => {
  const { id } = useParams();
  const { list } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  const cardsTotal = useSelector((state: AppState) => state.cards.data);
  const cards = cardsTotal.filter((item) => item.listId === list.id);
  const newCardList = cards.sort((a, b) => b.order - a.order)

  const emptyForm: ListForm = {
    title: list.title,
    boardId: Number(id),
  };
  const defaultForm: CardForm = {
    title: "",
    listId: Number(list.id),
    order: 0,
  };
  const [form, setForm] = useState<ListForm>(emptyForm);
  const [cardForm, setCardForm] = useState<CardForm>(defaultForm);
  const [cardTitle, setCardTitle] = useState("");
  const [addCardTitleMode, setAddCardTitleMode] = useState(false);

  const [openEditModal, setOpenEditModal] = useState(false);
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
  };
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleEditCardTitle = () => {
    setAddCardTitleMode(true);
  };
  const handleClickAway = () => {
    setAddCardTitleMode(false);
  };
  const handleDeleteList = () => {
    dispatch(deleteList(Number(list.id)));
  };
  const handleEditListTitle = () => {
    dispatch(updateList(form, Number(list.id)));
    handleCloseEditModal();
  };
  const handleEditCard = () => {
    if (cardForm.title !== "") {
      dispatch(addCard(cardForm));
      setAddCardTitleMode(false);
    }
    setAddCardTitleMode(false);
  };

  return (
    <Droppable droppableId={String(list.id)}>
      {(provided) => (
        <Grid
          {...provided.droppableProps}
          ref={provided.innerRef}
          item
          xs={2}
          sm={4}
          md={4}
        >
          <Card
            sx={{
              maxWidth: 345,
              m: 5,
              borderRadius: 3,
              borderColor: "grey.500",
            }}
          >
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
                      <IconButton
                        size="small"
                        disableRipple
                        onClick={handleDeleteList}
                      >
                        <DeleteIcon />
                        Delete List
                      </IconButton>
                    </MenuItem>
                    <MenuItem>
                      <IconButton
                        size="small"
                        onClick={handleOpenEditModal}
                        disableRipple
                      >
                        <DriveFileRenameOutlineIcon />
                        Rename List
                      </IconButton>
                    </MenuItem>
                  </Menu>
                </Box>
              }
              title={
                openEditModal ? (
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      id="list-title"
                      value={form.title}
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
                      required
                      label="List title"
                      variant="standard"
                      sx={{ m: 0.5 }}
                    ></TextField>
                    <IconButton onClick={handleEditListTitle}>
                      <CheckIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Card>{list.title}</Card>
                )
              }
            />

            <CardContent>
              <Paper style={{ overflow: "auto" }}>
                {newCardList && newCardList.length !== 0 ? (
                  newCardList.map((card, i) => (
                    <ListContent index={i} card={card} key={i} />
                  ))
                ) : (
                  <div>no cards</div>
                )}
              </Paper>
            </CardContent>

            <Divider />
            {addCardTitleMode && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <TextField
                    id="card-title"
                    value={cardForm.title}
                    onChange={
                      (e) =>
                        setCardForm({
                          ...cardForm,
                          title: e.target.value,
                          order: cards.length,
                        }) //eklemek istediğimiz card listesinin sonuna ekleme yaparken orderi card liste boyutu ile veriyoruz
                    }
                    required
                    label="Card title"
                    variant="standard"
                    sx={{ m: 3 }}
                  />
                  <CheckIcon onClick={handleEditCard} sx={{ mb: 3.5 }} />
                </Box>
              </ClickAwayListener>
            )}
            {cardTitle !== "" && addCardTitleMode && (
              <Button
                variant="contained"
                sx={{
                  borderRadius: "8px",
                  ml: 2,
                  mb: 2,
                  bgcolor: "text.secondary",
                }}
              >
                Add
              </Button>
            )}
            {!addCardTitleMode && (
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add a card"
                  disableRipple
                  onClick={handleEditCardTitle}
                >
                  <AddIcon />
                  <Typography color="text.secondary">add a card</Typography>
                </IconButton>
              </CardActions>
            )}
            {provided.placeholder}
          </Card>
        </Grid>
      )}
    </Droppable>
  );
};

export default ListItem;
