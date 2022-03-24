import { useState, FunctionComponent } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { Box, Paper, TextField, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ButtonUnstyled, {
  ButtonUnstyledProps,
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";
import { styled } from "@mui/system";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Tooltip from "@mui/material/Tooltip";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import ListChip from "../Labels/ListChip";
import CheckList from "../CheckList/CheckList";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { CardItem, CardUpdateForm } from "../../types/boards";
import { CheckListItemForm } from "../../types/checkList";
import { addCheckList } from "../../store/actions/CheckListActions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../store";
import { deleteCard, updateCard } from "../../store/actions/CardActions";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { CommentForm } from "../../types/comments";
import { addComment } from "../../store/actions/CommentActions";
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import CommentList from "../Comments/CommentList";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const grey = {
  700: "#616161",
  600: "#757575",
  800: "#424242",
};

const CustomButtonRoot = styled("span")`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.675rem;
  background-color: ${grey[800]};
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  margin-top: 30px;
  margin-left: 48px;

  &:hover {
    background-color: ${grey[700]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${grey[800]};
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
type Props = {
  handleClose?: any;
};

function CustomButton(props: ButtonUnstyledProps) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const labelStyle = {
  position: "absolute" as "absolute",
  top: "40%",
  left: "32%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const inputStyle = {
  position: "absolute" as "absolute",
  top: "33%",
  left: "39%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  p: 1,
  m: 1,
  borderRadius: 1,
};
const cardStyle = {
  position: "absolute" as "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 13,
  p: 4,
};
interface IListModalProps {
  card: CardItem;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListModal: FunctionComponent<IListModalProps> = (props) => {
  const { card, setOpen } = props;
  const dispatch = useDispatch();
  const emptyForm: CardUpdateForm = {
    title: card.title,
    listId: card.listId,
  };
  const [form, setForm] = useState<CardUpdateForm>(emptyForm);

  const emptyCommentForm: CommentForm = {
    cardId: Number(card.id),
    message: ""
  }
  
  const [commentForm, setCommentForm] = useState<CommentForm>(emptyCommentForm);

  const defaultForm: CheckListItemForm = {
    title: "",
    cardId: Number(card.id),
  };

  const [checkForm, setCheckForm] = useState<CheckListItemForm>(defaultForm);

  const [openLabel, setOpenLabel] = useState(false);
  const handleOpenLabel = () => setOpenLabel(true);
  const handleCloseLabel = () => setOpenLabel(false);

  const [openInput, setOpenInput] = useState(false);
  const handleOpenInput = () => setOpenInput(true);
  const handleCloseInput = () => setOpenInput(false);

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

  const handleAddCheckListTitle = () => {
    dispatch(addCheckList(checkForm));
    setOpenInput(false);
  
  };
  const listee = useSelector(
    (state: AppState) => state.boards.currentBoard.lists
  );
  const tekListe = listee.filter((item) => item.id === card.listId);

  const boardTitle = useSelector(
    (state: AppState) => state.boards.currentBoard.title
  );
  const handleSaveUpdate = () => {
    dispatch(updateCard(form, Number(card.id)));
    setOpen(false)
  }
  const handleDeleteCard = () => {
    dispatch(deleteCard(Number(card.id)))
    setOpen(false)
  }
  const handleAddComment = () => {
    dispatch(addComment(commentForm))
  }
  
  return (
    <>
      <Paper style={{ maxHeight: 500, overflowY: "auto" }}>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <IconButton
                  sx={{ color: "white", display: "block" }}
                  onClick={handleDeleteCard}
                >
                  <DeleteOutlineOutlinedIcon sx={{ fontSize: 30 }} />
                </IconButton>
                
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <IconButton
                  sx={{ color: "white", display: "block" }}
                  onClick={handleOpenLabel}
                >
                  <LabelOutlinedIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <Modal
                  open={openLabel}
                  onClose={handleCloseLabel}
                  aria-labelledby="card-detail"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={labelStyle}>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                    >
                      {[0, 1, 2, 3].map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                          <ListItem
                            key={value}
                            secondaryAction={
                              <IconButton edge="end" aria-label="comments">
                                <LabelOutlinedIcon />
                              </IconButton>
                            }
                            disablePadding
                          >
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
                                primary={`Line item ${value + 1}`}
                              />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </Box>
                </Modal>
              </Box>
              <Box sx={{ flexGrow: 30, display: { xs: "none", md: "flex" } }}>
                <IconButton
                  sx={{ color: "white", display: "block" }}
                  onClick={handleOpenInput}
                >
                  <CheckBoxOutlinedIcon sx={{ fontSize: 28 }} />
                </IconButton>
                <Modal
                  open={openInput}
                  onClose={handleCloseInput}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={inputStyle}>
                    <TextField
                      required
                      id="check-list-title"
                      label="Checklist Title"
                      value={checkForm.title}
                      onChange={(e) =>
                        setCheckForm({ ...checkForm, title: e.target.value })
                      }
                    />
                    <CustomButton onClick={handleAddCheckListTitle}>
                      Add
                    </CustomButton>
                  </Box>
                </Modal>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Close list">
                  <IconButton sx={{ p: 0 }} onClick={handleSaveUpdate}>
                    <SaveOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <CardHeader
          subheader={
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    {boardTitle}
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href="/getting-started/installation/"
                  >
                    {tekListe[0].title}
                  </Link>
                </Breadcrumbs>
              </div>
              <Box>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    value={card.duedate}
                    onChange={(newValue) => {
                      setForm((prev: any) => ({
                        ...prev,
                        duedate: new Date(newValue).toISOString().slice(0, 10),
                      }));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
          }
        />
        <Box>
          <CardContent>
            <TextField
              required
              id="titleId"
              label="title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              fullWidth
              sx={{ m: 2 }}
            />
            <TextField
              id="descriptionId"
              label="Description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              multiline
              rows={4}
              fullWidth
              sx={{ mx: 2, mb: 3 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <LabelOutlinedIcon />
              <Typography
                sx={{ ml: 1 }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Labels
              </Typography>
            </Box>
            <ListChip card={card} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: 3,
              }}
            >
              <CommentOutlinedIcon />
              <Typography
                sx={{ ml: 1 }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Comments
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle
                sx={{ color: "action.active", mr: 1, my: 4 }}
                fontSize="large"
              />
              <TextField
                required
                value={commentForm.message}
                onChange={(e) =>
                  setCommentForm({ ...commentForm, message: e.target.value })
                }
                id="commentId"
                label="Add comment"
                fullWidth
                sx={{ m: 1, mb: 3 }}
                placeholder="Write a comment..."
              />
            </Box>
            <CustomButton onClick={handleAddComment}>Add</CustomButton>
           
            <CheckList card={card} />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <NotesOutlinedIcon />
              <Typography
                sx={{ ml: 1 }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Activity
              </Typography>
     <CommentList card={card} />
            </Box>
          </CardContent>
        </Box>
      </Paper>
    </>
  );
};
export default ListModal;
