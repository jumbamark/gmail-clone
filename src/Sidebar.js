import {Button, IconButton} from "@mui/material";
import React from "react";
import "./Sidebar.css";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import {useDispatch} from "react-redux";
import {openSendMessage} from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        className="sidebar-compose"
        startIcon={<AddIcon fontSize="large" />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={StarIcon} title="Starred" number={13} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={0} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={3} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={0} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={0} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={13} />

      <div className="sidebar-footer">
        <div className="sidebar-footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

// Make it so that you can actually pass a prop to the sidebar and then it would be selected

// In order to dispatch an action into redux we use useDispatch
// Have it so that if I click on the compose button then we call the openSendMessage action which changes the initialState value in mailSlice
