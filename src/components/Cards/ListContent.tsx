import { useState, FunctionComponent, useEffect } from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "@mui/material/Divider";
import ListModal from "./ListModal";
import { Box, CardContent, Chip, Typography } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import { CardItem } from "../../types/boards";

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

interface IListContentProps {
  card: CardItem;
}
const ListContent: FunctionComponent<IListContentProps> = (props) => {
  const { card } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Card sx={{ minWidth: 250, borderRadius: 8, textAlign: "left", m: 1 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {card.labels &&
              card.labels.length !== 0 &&
              card.labels.map((card, i) => (
                <Chip
                  key={i}
                  size="small"
                  sx={{
                    minWidth: "35px",
                    maxHeight: "8px",
                    mx: 1,
                    backgroundColor: card.color,
                  }}
                />
              ))}
          </Box>
          <Box>
            <Typography variant="overline" display="block" sx={{ mt: 1 }}>
              {card.title}
            </Typography>
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
              label={card.duedate}
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
            marginX: 2,
          }}
        >
          <IconButton aria-label="open Modal" onClick={handleOpen}>
            <VisibilityIcon />
          </IconButton>
          {card.comments.length !== 0 && (
            <IconButton>
              <InsertCommentOutlinedIcon />
            </IconButton>
          )}
        </Box>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Card sx={style}>
          <ListModal setOpen={setOpen} card={card} />
        </Card>
      </Modal>
    </>
  );
};
export default ListContent;
