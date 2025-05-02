// src/components/Layout.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaFolder, FaPlus, FaRegFileAlt, FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useAppContext } from "../Context/AppContext";
import { IoIosLogOut } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const Sidebar = () => {

  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const { navigate } = useAppContext();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (

    <div className="w-64  bg-zinc-900 text-white h-screen flex flex-col justify-between p-4">
      <button
        ref={buttonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center bg-zinc-800 px-4 py-2 rounded-md hover:bg-zinc-700 text-white"
      >
        <img
          src="https://dummyimage.com/20x20/000/fff&text=A"
          alt="Logo"
          className="mr-2"
        />
        Ankit's Team
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          ref={menuRef}
          className="text-sm absolute ml-3 top-15 left-0 z-10 mt-2 w-60 bg-zinc-800 rounded-t-md rounded-sm text-white"
        >
          <div className="p-2">
            <div className="bg-green-600 px-4 py-2 rounded-md font-medium">Ankit's Team</div>
            <div className="mt-2 space-y-1">
              {/* <button className="w-full flex items-center px-4 py-2 hover:bg-zinc-700 rounded-md">
                👥 <span className="ml-2">Join or Create Team</span>
              </button> */}
              <button className="w-full flex items-center px-4 py-2 hover:bg-zinc-700 rounded-md">
                {<CiSettings />} <span className="ml-2">Settings</span>
              </button>
              <button className="w-full flex items-center px-4 py-2 hover:bg-zinc-700 rounded-md">
                {<IoIosLogOut />} <span className="ml-2">Logout</span>
              </button>
            </div>

            <div className="py-1 mt-3 border-t border-zinc-700  flex items-center mx-2 space-x-2">

              <div className=" ">
                <img
                  src="https://dummyimage.com/32x32/aaa/fff&text=AS"
                  className="rounded-full"
                  alt="User"
                />
              </div>

              <div className="text-sm flex font-semibold flex-col">
                <p>Ankit Sahu</p>
                <p className="w-[160px] rounded-md mr-1 text-white overflow-x-auto whitespace-nowrap scrollbar-hide ">sahu@gmail.com</p>
              </div>

            </div>
          </div>
        </div>
      )}

      <button onClick={() => {
        navigate("/room")
      }} className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-500">
        + Create Room
      </button>
    </div>
  )
};

const Navbar = () => (
  <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700 bg-zinc-900 text-white">
    <div className="flex gap-6 text-sm">
      <button className="hover:text-green-400">All</button>
      <button className="hover:text-green-400">Recents</button>
      <button className="hover:text-green-400">Created by Me</button>
      <button className="hover:text-green-400">Folders</button>
      <button className="hover:text-green-400">Unsorted</button>
    </div>
    <div className="flex gap-4 items-center">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="bg-zinc-800 px-3 py-1 rounded text-sm pl-8 border border-zinc-700"
        />
        <FiSearch className="absolute left-2 top-2 text-zinc-400" />
      </div>
      <FaRegUserCircle className="text-xl" />
      <button className="bg-green-600 px-4 py-1.5 rounded text-white text-sm hover:bg-green-500">
        Invite
      </button>
    </div>
  </div>
);

const Mainbar = () => (
  <div className="flex-1 p-6 bg-zinc-800 text-white overflow-y-auto">

    <table className="w-full text-sm">
      <thead className="text-zinc-400">
        <tr>
          <th className="text-left py-2">NAME</th>
          <th className="text-left py-2">LOCATION</th>
          <th className="text-left py-2">CREATED</th>
          <th className="text-left py-2">EDITED</th>
          <th className="text-left py-2">COMMENTS</th>
          <th className="text-left py-2">AUTHOR</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2].map((_, i) => (
          <tr key={i} className="border-t border-zinc-700 hover:bg-zinc-700">
            <td className="py-2">Untitled File</td>
            <td className="py-2">-</td>
            <td className="py-2">2 months ago</td>
            <td className="py-2">2 months ago</td>
            <td className="py-2">0</td>
            <td className="py-2">
              <FaRegUserCircle />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Hero = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <Mainbar />
    </div>
  </div>
);

export default Hero;