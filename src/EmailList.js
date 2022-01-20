import {Checkbox, IconButton} from "@mui/material";
import React, {useEffect, useState} from "react";
import "./EmailList.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {ChevronLeft} from "@mui/icons-material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";
import {db} from "./firebase";
import {collection, onSnapshot, orderBy} from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "emails"), orderBy("timestamp", "desc"), (snapshot) =>
      setEmails(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList-settings">
        <div className="emailList-settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList-settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList-sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList-list">
        {/* {emails.map((email) => ({}))} */}

        {emails.map(({id, data: {to, subject, message, timestamp}}) => {
          return (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds * 1000).toUTCString()}
            />
          );
        })}

        <EmailRow
          title="Check this out"
          subject="Hey looser"
          description="The difference between ordinary and extraordinary is that little extra"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;

// I'm targeting the collection of emails in the database and order by the timestamp.
// onSnapshot is basically a real time listener -any time anything changes over oin the db then it's gonna be updated and this piece of code will fire off again
// Every time we get a snapshot of the db we setEmails. (the emails columnin firesore - docs)
// snapshot.docs.map. For every single doc inside of the emails column I wanna return an object (wanna get the id and the data)
// We set the emails, every time a change happens we update the emails on the frontend and then we map through them and we basically gonna say get me an object with this id and the data is all the stuff on the right as an object

// Go down to the bottom div and rather than hard coded values map through all the emails, for every single email return the following (an EmailRow).
// Break up the email - when we mapped it we got an id and the data object (break up the data object)
// When I render out the EmailRow theid and the key will be the id. The key is used so that if we basically have a list of 1000 elements when we push in another element it doesn't have to re render the entire list but instead it just pops in the new one
// Timestamp would break our code - we use in new Date and put in the timestamp which could be undefined at a given point so you wanna make it optional chaining, you get the seconds multiply by 100 then convert it
