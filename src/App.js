import React, {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import {useDispatch, useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import {login, selectUser} from "./features/userSlice";
import Login from "./Login";
import {auth} from "./firebase";
import {onAuthStateChanged} from "firebase/auth";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // the user is logged in
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, [dispatch]);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />

          <div className="app-body">
            <Sidebar />

            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
          </div>

          {/* If the sendMessageIsOpen the we should render the SendMail */}
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </>
  );
}

export default App;

// Install react router
// The header should always render
// Inside of the app-body the sidebar should always render (route afew things based on my page)
// If the route is "/mail" render the Mail component. The two components that will render based on the path

// Have it so that when I click compose it changes the piece of state in redux store which shows this form
// We had a piece of state called sendMessageIsOpen, fetch that from the store - use useSelector

// When I hit Compose it triggers an action(Go to Sidebar)
