import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CloseIcon from "@mui/icons-material/Close";
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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import ListChip from "./ListChip";

interface ChipData {
  key: number;
  label: string;
}

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

const dateStyle = {
  position: "absolute" as "absolute",
  top: "28%",
  left: "29%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

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

export default function ListModal({ handleClose }: Props) {
  const [value, setValue] = React.useState<Date | null>(new Date());

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  const [openDate, setOpenDate] = React.useState(false);
  const handleOpenDate = () => setOpenDate(true);
  const handleCloseDate = () => setOpenDate(false);

  const [openLabel, setOpenLabel] = React.useState(false);
  const handleOpenLabel = () => setOpenLabel(true);
  const handleCloseLabel = () => setOpenLabel(false);

  const [openInput, setOpenInput] = React.useState(false);
  const handleOpenInput = () => setOpenInput(true);
  const handleCloseInput = () => setOpenInput(false);

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
    <Paper style={{ maxHeight: 500, overflowY: "auto" }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <IconButton
                onClick={handleOpenDate}
                sx={{ color: "white", display: "block" }}
              >
                <TodayOutlinedIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <Modal
                open={openDate}
                onClose={handleCloseDate}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={dateStyle}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      label="Date Time picker"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </Box>
              </Modal>
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
                aria-labelledby="modal-modal-title"
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
                    id="outlined-uncontrolled"
                    label="Checklist Title"
                  />
                  <CustomButton>Add</CustomButton>
                </Box>
              </Modal>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Close list">
                <IconButton sx={{ p: 0 }} onClick={handleClose} >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <CardHeader
        // action={
        //   <IconButton aria-label="settings" onClick={handleClose}>
        //     <CloseIcon />
        //   </IconButton>
        // }
        subheader={
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Untitled Board
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/getting-started/installation/"
              >
                title
              </Link>
            </Breadcrumbs>
          </div>
        }
      />
      <Box>
        <CardContent>
          <TextField
            required
            id="titleId"
            label="Title"
            defaultValue="title"
            fullWidth
            sx={{ m: 2 }}
          />
          <TextField
            id="descriptionId"
            label="Description"
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
          <ListChip />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
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
              id="commentId"
              label="Add comment"
              fullWidth
              sx={{ m: 1, mb: 3 }}
              placeholder="Write a comment..."
            />
          </Box>
          <CustomButton>Add</CustomButton>
        </CardContent>
        {/* <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions> */}
      </Box>
    </Paper>
  );
}
