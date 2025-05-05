import React from 'react';
import { CiChat1 } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { VscRunAll } from "react-icons/vsc";
import { MdOutlineGroupAdd } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { LuPenLine } from "react-icons/lu";

const SidebarItem = ({ icon: Icon, label }) => (
    <div className="relative group flex">
        <Icon className='text-[40px] mt-5 font-semibold text-white hover:bg-slate-600 rounded-md p-1 cursor-pointer' />
        
        <div className="absolute left-10 ml-2 scale-0 group-hover:scale-100 transition-transform bg-gray-300 text-black text-xs font-semibold px-2 py-1 rounded whitespace-nowrap z-10">
            {label}
        </div>
    </div>
);

export default function Sidebar() {
    return (
        <div className='bg-dark flex flex-col h-screen p-2 w-[60px] border-r-1 border-gray-500 '>
            <SidebarItem icon={CiFolderOn} label="Folder" /> 
            <SidebarItem icon={CiChat1} label="Chat" />
            <SidebarItem icon={VscRunAll} label="Run" />
            <SidebarItem icon={MdOutlineGroupAdd} label="Collaborator" />
            <SidebarItem icon={CiSettings} label="Settings" />
            <SidebarItem icon={LuPenLine} label="Switch to draw mode" />
        </div>
    );
}
