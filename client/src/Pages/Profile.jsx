import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

const ProfilePage = () => {
  const [showFriends, setShowFriends] = useState(false);
  const dropdownRef = useRef(null);

  const friends = [
    { name: "Ravi Kumar", avatar: "https://i.pravatar.cc/32?u=ravi" },
    { name: "Sneha Das", avatar: "https://i.pravatar.cc/32?u=sneha" },
    { name: "John Deo", avatar: "https://i.pravatar.cc/32?u=john" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFriends(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClose = () => {
    // Customize what "close" does — navigate, hide, etc.
    alert("Closing profile...");
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-white flex flex-col items-center p-4">
      {/* Navbar */}
      <div className="w-full max-w-3xl flex justify-between items-center bg-zinc-700 px-6 py-4 rounded-t-xl">
        <h1 className="text-xl font-bold text-white">Profile</h1>
        <button
          onClick={handleClose}
          className="text-white hover:text-red-400 transition"
        >
          close <X className="w-6 h-6" />
        </button>
      </div>

      {/* Content Card */}
      <div className="bg-zinc-700 rounded-b-xl shadow-xl p-6 w-full max-w-3xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        
        {/* Left: Avatar + Name */}
        <div className="flex flex-col items-center md:items-start space-y-4 w-full md:w-1/3">
          <img
            src="https://i.pravatar.cc/100?u=ankit"
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-green-500"
          />
          <h2 className="text-2xl font-bold">Ankit Sahu</h2>
        </div>

        {/* Right: Info + Dropdown */}
        <div className="flex flex-col justify-between w-full md:w-2/3 space-y-4">
          <div>
            <p className="text-sm text-zinc-300">Email</p>
            <p className="font-medium text-white">sahu@gmail.com</p>
          </div>

          <div>
            <p className="text-sm text-zinc-300">GitHub</p>
            <a
              href="https://github.com/ankitsahu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              github.com/ankitsahu
            </a>
          </div>

          <div ref={dropdownRef}>
            <button
              onClick={() => setShowFriends(!showFriends)}
              className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center justify-between w-full hover:bg-green-600 transition"
            >
              Friends
              <ChevronDown
                className={`ml-2 transition-transform ${showFriends ? "rotate-180" : ""}`}
              />
            </button>

            {showFriends && (
              <div className="mt-2 bg-zinc-600 rounded-md shadow-lg overflow-hidden">
                {friends.map((friend, index) => (
                  <div
                    key={index}
                    className="flex items-center px-4 py-2 hover:bg-zinc-500 transition"
                  >
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <span>{friend.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
