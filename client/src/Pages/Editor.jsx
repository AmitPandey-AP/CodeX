import React, { useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import SplitterComponent from "@/components/SplitterComponent";
import ConnectionStatusPage from "@/components/connection/ConnectionStatusPage";
import Sidebar from "@/components/sidebar/Sidebar";
import WorkSpace from "@/components/workspace";
import { useAppContext } from "@/context/AppContext";
import { useSocket } from "@/context/SocketContext";
import useFullScreen from "@/hooks/useFullScreen";
import useUserActivity from "@/hooks/useUserActivity";
import { SocketEvent } from "@/types/socket";
import { USER_STATUS } from "@/types/user";

function EditorPage() {
  useUserActivity();         // Tracks user's activity
  useFullScreen();           // Enables fullscreen mode

  const navigate = useNavigate();
  const { roomId } = useParams();
  const location = useLocation();
  const { status, setCurrentUser, currentUser } = useAppContext();
  const { socket } = useSocket();

  useEffect(() => {
    if (currentUser.username && currentUser.username.length > 0) return;

    const username = location.state?.username;

    if (!username) {
      navigate("/", {
        state: { roomId },
      });
    } else if (roomId) {
      const user = { username, roomId };
      setCurrentUser(user);
      socket.emit(SocketEvent.JOIN_REQUEST, user);
    }
  }, [
    currentUser.username,
    location.state?.username,
    navigate,
    roomId,
    setCurrentUser,
    socket,
  ]);

  if (status === USER_STATUS.CONNECTION_FAILED) {
    return <ConnectionStatusPage />;
  }

  return (
    <SplitterComponent>
      <Sidebar />
      <WorkSpace />
    </SplitterComponent>
  );
}

export default EditorPage;
