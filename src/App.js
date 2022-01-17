import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />

        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/mail" element={<Mail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// Install react router
// The header should always render
// Inside of the app-body the sidebar should always render (route afew things based on my page)
// If the route is "/mail" render the Mail component. The two components that will render based on the path
