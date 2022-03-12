import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from "@mui/material/IconButton";
import CardActions from '@mui/material/CardActions';
import Modal from "@mui/material/Modal";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Divider from '@mui/material/Divider';
import ListModal from './ListModal';


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
    <Card sx={{ minWidth: 250,  borderColor: 'grey.500' }}>
      <CardHeader
        title="Card title"
      />
        <Divider />
      <CardActions disableSpacing>
        <IconButton aria-label="open Modal" onClick={handleOpen}>
          <VisibilityIcon />
        </IconButton>

    
      </CardActions>
     
    </Card>
     <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Card sx={style}>
       <ListModal handleClose={handleClose} />
     </Card>
   </Modal>
   </>
  );
}