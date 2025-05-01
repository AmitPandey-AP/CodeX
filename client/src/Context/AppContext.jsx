import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {folders} from "../assets/data.js"

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {

  const [user, setuser] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(null);
  const [folder, setFolder] = useState();
  const navigate = useNavigate();
  const val = {user,setuser,showUserLogin,setShowUserLogin,axios,navigate};
  return <AppContext.Provider value={val}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

// useAppcontext se jo bhi value parameter ke andar jayega unka access mil jayega
