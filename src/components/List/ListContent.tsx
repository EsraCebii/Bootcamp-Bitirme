import * as React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "@mui/material/Divider";
import ListModal from "./ListModal";
import { Box, CardContent, Chip } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";

const style = {
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

export default function ListContent() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ minWidth: 250, borderRadius: 8, textAlign: "left" }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Chip
              color="primary"
              size="small"
              sx={{ minWidth: "35px", maxHeight: "8px", mx: 1 }}
            />
            <Chip
              color="success"
              size="small"
              sx={{ minWidth: "35px", maxHeight: "8px", mx: 1 }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Chip
              label="1/2"
              sx={{ my: 1 }}
              avatar={<CheckCircleOutlineRoundedIcon />}
            />
            <Chip
              label="Mar 3rd 22"
              color="error"
              sx={{ m: 1 }}
              avatar={<AccessTimeRoundedIcon />}
            />
          </Box>
          <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24, my: 1 }} />
        </CardContent>
        <Divider />
      
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginY: 1,
              marginX: 2
            }}
          >
            <IconButton aria-label="open Modal" onClick={handleOpen}>
              <VisibilityIcon />
            </IconButton>
            <IconButton>
              <InsertCommentOutlinedIcon />
            </IconButton>
          </Box>

      </Card>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Card sx={style}>
          <ListModal handleClose={handleClose} />
        </Card>
      </Modal>
    </>
  );
}
