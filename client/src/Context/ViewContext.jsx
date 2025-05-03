import ChatsView from "../Components/Sidebar/Sidebar-Views/ChatView.jsx";
import FilesView from "./Components/Sidebar/Sidebar-Views/FilesView.jsx";
import RunView from "./Components/Sidebar/Sidebar-Views/RunView.jsx";
import SettingsView from "./Components/Sidebar/Sidebar-Views/SettingsView.jsx";
import UsersView from "./Components/Sidebar/Sidebar-Views/UsersView.jsx";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { VIEWS } from "@/types/view";
import { createContext, useContext, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { PiChats, PiPlay, PiUsers } from "react-icons/pi";

const ViewContext = createContext(null);

export const useViews = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useViews must be used within a ViewContextProvider");
  }
  return context;
};

function ViewContextProvider({ children }) {
  const { isMobile } = useWindowDimensions();
  const [activeView, setActiveView] = useState(VIEWS.FILES);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const [viewComponents] = useState({
    [VIEWS.FILES]: <FilesView />,
    [VIEWS.CLIENTS]: <UsersView />,
    [VIEWS.SETTINGS]: <SettingsView />,
    [VIEWS.CHATS]: <ChatsView />,
    [VIEWS.RUN]: <RunView />,
  });
  const [viewIcons] = useState({
    [VIEWS.FILES]: <LuFiles size={28} />,
    [VIEWS.CLIENTS]: <PiUsers size={30} />,
    [VIEWS.SETTINGS]: <IoSettingsOutline size={28} />,
    [VIEWS.CHATS]: <PiChats size={30} />,
    [VIEWS.RUN]: <PiPlay size={28} />,
  });

  return (
    <ViewContext.Provider
      value={{
        activeView,
        setActiveView,
        isSidebarOpen,
        setIsSidebarOpen,
        viewComponents,
        viewIcons,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export { ViewContextProvider };
export default ViewContext;
