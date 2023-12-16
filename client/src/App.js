import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import Homepage from "./components/Homepage";
import UserPage from "./components/UserPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/user/*" element={<UserPage />} />
      <Route path="/admin/*" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
