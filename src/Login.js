import React from "react";
import "./Login.css";
import Gmail from "./assets/Gmail.png";
import {Button} from "@mui/material";
import {auth, provider} from "./firebase";
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";
import {signInWithPopup} from "firebase/auth";

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    //   Google Authentication
    signInWithPopup(auth, provider)
      .then(({user}) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={Gmail} alt="" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;

// Mui button (Login)
// Create a sign in function. We'll need our auth module(pull it from our local firebase file)
// Add the variants to the button to get a nice filter

// Google Authentication
// signInWithPopup and pass in the auth and provider from our loacl firebase file(this gives us back a user). Then pass in the user. If the user signs in correctly we can go ahead and dispatch login action from the userSlice. Pass into login the user object -everything can take a payload- . If there is an error at any point we alert with the error message.

// When we refresh it logs us out
// How to persist the login
//Go into app.js and use a useEffect hook
