import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarLayout from "./Layout/SidebarLayout/SidebarLayout.jsx";
import Profile from "./pages/profile/index.jsx";
import Feed from "./pages/feed/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarLayout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </SidebarLayout>
    </BrowserRouter>
  </React.StrictMode>
);
