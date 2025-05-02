import Users from "@/components/common/Users";
import { useAppContext } from "@/context/AppContext";
import { useSocket } from "@/context/SocketContext";
import useResponsive from "@/hooks/useResponsive";
import { USER_STATUS } from "@/types/user";
import toast from "react-hot-toast";
import { GoSignOut } from "react-icons/go";
import { IoShareOutline } from "react-icons/io5";
import { LuCopy } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function UsersView() {
  const navigate = useNavigate();
  const { viewHeight } = useResponsive();
  const { setStatus } = useAppContext();
  const { socket } = useSocket();

  const copyURL = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("URL copied to clipboard");
    } catch (error) {
      toast.error("Unable to copy URL to clipboard");
      console.error(error);
    }
  };

  const shareURL = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ url });
      } catch (error) {
        toast.error("Unable to share URL");
        console.error(error);
      }
    } else {
      toast("Sharing not supported. Use 'Copy Link' instead.");
    }
  };

  const leaveRoom = () => {
    socket.disconnect();
    setStatus(USER_STATUS.DISCONNECTED);
    navigate("/", { replace: true });
  };

  return (
    <div className="flex flex-col p-4" style={{ height: viewHeight }}>
      <h1 className="view-title">Users</h1>
      <Users />
      <div className="flex flex-col items-center gap-4 pt-4">
        <div className="flex w-full gap-4">
          <button
            className="flex flex-grow items-center justify-center rounded-md bg-white p-3 text-black"
            onClick={shareURL}
            title="Share Link"
            aria-label="Share Link"
          >
            <IoShareOutline size={26} />
          </button>
          <button
            className="flex flex-grow items-center justify-center rounded-md bg-white p-3 text-black"
            onClick={copyURL}
            title="Copy Link"
            aria-label="Copy Link"
          >
            <LuCopy size={22} />
          </button>
          <button
            className="flex flex-grow items-center justify-center rounded-md bg-primary p-3 text-black"
            onClick={leaveRoom}
            title="Leave Room"
            aria-label="Leave Room"
          >
            <GoSignOut size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default UsersView;
