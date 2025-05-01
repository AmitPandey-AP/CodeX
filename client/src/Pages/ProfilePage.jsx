// src/components/Layout.jsx
import React from "react";
import { FaFolder, FaPlus, FaRegFileAlt, FaRegUserCircle } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Sidebar = () => (
  <div className="w-64 bg-zinc-900 text-white h-screen flex flex-col justify-between p-4">
    <div>
      <div className="text-lg font-semibold mb-6 flex items-center justify-between">
        <span>Ankit's Team</span>
      </div>
      
      <p className="text-sm text-zinc-400 mt-4 mb-2">TEAM FOLDERS</p>
      <button className="text-zinc-400 hover:text-white hover:bg-zinc-700 p-2 rounded">
        <FaPlus className="inline" /> Create Folder
      </button>
    </div>
    
      <button className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-500">
        + New File
      </button>
  </div>
);

const Navbar = () => (
  <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700 bg-zinc-900 text-white">
    <div className="flex gap-6 text-sm">
      <button className="hover:text-blue-400">All</button>
      <button className="hover:text-blue-400">Recents</button>
      <button className="hover:text-blue-400">Created by Me</button>
      <button className="hover:text-blue-400">Folders</button>
      <button className="hover:text-blue-400">Unsorted</button>
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
      <button className="bg-blue-600 px-4 py-1.5 rounded text-white text-sm hover:bg-blue-500">
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

const ProfilePage = () => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <Mainbar />
    </div>
  </div>
);

export default ProfilePage;