import React from "react";
import logo from "./logo.jpg";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
        <img src={logo} height="120" alt="logo" />
        
      <Profile></Profile>
    </div>
  );
}

export default App;
