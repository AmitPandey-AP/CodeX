import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { folders } from "../assets/data.js"

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {

  const [showUserLogin, setShowUserLogin] = useState(null);
  const [folder, setFolder] = useState();
  const [currentUser, setCurrentUser] = useState({
    username: "",
    roomId: "",
    roomname:"",
  });
  const [viewState, setViewState] = useState("Folder");
  const navigate = useNavigate();
  const val = { showUserLogin, setShowUserLogin, axios, navigate, currentUser, setCurrentUser, viewState, setViewState };
  return <AppContext.Provider value={val}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// useAppcontext se jo bhi value parameter ke andar jayega unka access mil jayega
