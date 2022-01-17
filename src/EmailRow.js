import {LabelImportantOutlined, StarBorderOutlined} from "@mui/icons-material";
import {Checkbox, IconButton} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import "./EmailRow.css";

function EmailRow({id, title, subject, description, time}) {
  const navigate = useNavigate();

  return (
    <div className="emailRow" onClick={() => navigate("/mail")}>
      <div className="emailRow-options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>

      <h3 className="emailRow-title">{title}</h3>

      <div className="emailRow-message">
        <h4>
          {subject} <span className="emailRow-description"> -{description}</span>
        </h4>
      </div>
      <p className="emailRow-time">{time}</p>
    </div>
  );
}

export default EmailRow;

// When I click into emailRow it takes me to "/mail"
// React router gives us the useNavigate hook - gives us the history of the web page
// when you click on emailRow you are pushing the "/mail" route and if you go back you are pushing the EmailList-homepage (imagine pushing a web page onto your browser)
