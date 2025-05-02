import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../Context/AppContext";
import logoTransparent from "../assets/logoTransparent.png"


const Form = () => {
    
    const { currentUser, setCurrentUser, navigate } = useAppContext()

    const [roomname, setRoomname] = useState("");

    const usernameRef = useRef(null);
    const userroomRef = useRef(null);


    const createNewRoomId = () => {
        setCurrentUser({ ...currentUser, roomId: uuidv4() });
        toast.success("Created a new Room Id");
        usernameRef.current?.focus();
    };

    const handleInputChanges = (e) => {
        const roomname = e.target.value;
        setRoomname(roomname);
    };

    const validateForm = () => {
        if (currentUser.username.trim().length === 0) {
            toast.error("Enter your username");
            return false;
        } else if (currentUser.roomId.trim().length === 0) {
            toast.error("Enter a room id");
            return false;
        } else if (currentUser.roomId.trim().length < 5) {
            toast.error("ROOM Id must be at least 5 characters long");
            return false;
        } else if (currentUser.username.trim().length < 3) {
            toast.error("Username must be at least 3 characters long");
            return false;
        }
        return true;
    };
    
    const joinRoom = (e) => {
        e.preventDefault();
        const updatedUser = { ...currentUser, roomname };
        setCurrentUser(updatedUser); 
        console.log("Updated currentUser immediately:", updatedUser); 
    //     if (status === USER_STATUS.ATTEMPTING_JOIN) return;
    //     if (!validateForm()) return;

    //     toast.loading("Joining room...");
    //     setStatus(USER_STATUS.ATTEMPTING_JOIN);
    //     socket.emit(SocketEvent.JOIN_REQUEST, currentUser);
    };

    // useEffect(() => {
    //     if (currentUser.roomId.length > 0) return;
    //     if (location.state?.roomId) {
    //         setCurrentUser({ ...currentUser, roomId: location.state.roomId });
    //         if (currentUser.username.length === 0) {
    //             toast.success("Enter your username");
    //         }
    //     }
    // }, [location.state?.roomId]);

    // useEffect(() => {
    //     if (status === USER_STATUS.DISCONNECTED && !socket.connected) {
    //         socket.connect();
    //         return;
    //     }

    //     const isRedirect = sessionStorage.getItem("redirect") || false;

    //     if (status === USER_STATUS.JOINED && !isRedirect) {
    //         sessionStorage.setItem("redirect", "true");
    //         navigate(`/editor/${currentUser.roomId}`, {
    //             state: { username: currentUser.username },
    //         });
    //     } else if (status === USER_STATUS.JOINED && isRedirect) {
    //         sessionStorage.removeItem("redirect");
    //         setStatus(USER_STATUS.DISCONNECTED);
    //         socket.disconnect();
    //         socket.connect();
    //     }
    // }, [status]);

    return (
        <div className="flex w-full max-w-[500px] flex-col items-center justify-center gap-4 p-4 sm:w-[500px] sm:p-8">
            <img src={logoTransparent} alt="Logo" className="w-full" />
            <form
                onSubmit={joinRoom}
                className="text-white flex w-full flex-col gap-4">
                <input
                    type="text"
                    name="roomId"
                    placeholder="Room Id"
                    readOnly
                    className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
                    value={currentUser.roomId}
                />

                 <input
                    type="text"
                    name="roomname"
                    placeholder="Room Name"
                    className="w-full rounded-md border border-gray-500 bg-darkHover px-3 py-3 focus:outline-none"
                    onChange={handleInputChanges}
                    value={roomname}
                    // ref={userroomRef}
                />
                <button
                    type="submit"
                    className="mt-2 w-full rounded-md bg-green-400 px-8 py-3 text-lg font-semibold text-black"
                >
                    Join
                </button>
            </form>
            <button
                className="text-white cursor-pointer select-none underline"
                onClick={createNewRoomId}
            >
                Generate Unique Room Id
            </button>
        </div>
    );
};

export default Form;
