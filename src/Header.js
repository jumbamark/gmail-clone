import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "./features/userSlice";
import {signOut} from "firebase/auth";
import {auth} from "./firebase";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const SignOut = () => {
    // We need to logout from firebase
    signOut(auth)
      .then((user) => {
        // Sign-out successful.
        dispatch(logout());
      })
      .catch((error) => {
        // An error happened.
        alert(error.message);
      });
  };

  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png"
          alt=""
        />
      </div>

      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header-inputCaret" />
      </div>

      <div className="header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>

        <Avatar src={user?.photoUrl} onClick={SignOut} />
      </div>
    </div>
  );
}

export default Header;

// When you fail to wrap it in IconButton you get the icon but it is not a button (there is no ripple effect on clicking)

//Avatar - user? (protect against undefined error)
