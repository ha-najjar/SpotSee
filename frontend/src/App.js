import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProfilePage from "./components/ProfilePage";
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
