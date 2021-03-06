import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import LabelImportant from "@mui/icons-material/LabelImportant";
import MoreVert from "@mui/icons-material/MoreVert";
import {IconButton} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import "./Mail.css";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import {useSelector} from "react-redux";
import {selectOpenMail} from "./features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBack />
          </IconButton>

          <IconButton>
            <MoveToInbox />
          </IconButton>

          <IconButton>
            <Error />
          </IconButton>

          <IconButton>
            <Delete />
          </IconButton>

          <IconButton>
            <Email />
          </IconButton>

          <IconButton>
            <WatchLater />
          </IconButton>

          <IconButton>
            <CheckCircle />
          </IconButton>

          <IconButton>
            <LabelImportant />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail-toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>

          <IconButton>
            <Print />
          </IconButton>

          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail-body">
        <div className="mail-bodyHeader">
          {/* <h2>Subject</h2> */}
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className="mail-important" />
          {/* <p>Title</p> */}
          <p>{selectedMail?.title}</p>
          {/* <p className="mail-time">10pm</p> */}
          <p className="mail-time">{selectedMail?.time}</p>
        </div>

        <div className="mail-message">
          {/* <p>This is a message</p> */}
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;

// populate the contents of the mail based on what is inside the state
// use the selector we created to get the mail
// Replace whatever we had with selectedMail the optional chaining bec it could be undefined for whatever reason
