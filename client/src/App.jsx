import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import { Login } from "./Pages/Login";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div className="bg-zinc-800">
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<ProfilePage/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
