import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About.jsx";
import { Login } from "./Pages/Login.jsx";
import Room from "./Pages/Room.jsx";
import Hero from "./Pages/Hero.jsx";
import ProfilePage from "./Pages/Profile.jsx";
import EditorPage from "./Pages/Editor.jsx";

function App() {
  return (
    <div className="bg-zinc-800">
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Hero />}></Route>
        <Route path="/room" element={<Room />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/editor" element={<EditorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
