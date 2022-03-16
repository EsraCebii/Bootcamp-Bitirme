import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { Box, Modal, TextField } from "@mui/material";
import * as React from "react";

const dateStyle = {
  position: "absolute" as "absolute",
  top: "28%",
  left: "29%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};
type Props = {
    openDate: boolean,
    setOpenDate: React.Dispatch<React.SetStateAction<boolean>>

}
function DateTime({openDate, setOpenDate} : Props) {
  const [value, setValue] = React.useState<Date | null>(new Date());

 
  const handleCloseDate = () => setOpenDate(false);
  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <div>
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
    </div>
  );
}

export default DateTime;
