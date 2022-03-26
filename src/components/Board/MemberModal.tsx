import { FunctionComponent, useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import { Member } from "../../types/boards";


interface IMemberProps {
    member: Member;
  }
const MemberModal: FunctionComponent<IMemberProps> = (props) => {
  const {member} = props;

    return (
        <MenuItem>
          <ListItem key={member.id} disablePadding>
         
              <ListItemText
                primary={member.username}
              />
          </ListItem>
        </MenuItem>
      );
}

export default MemberModal;