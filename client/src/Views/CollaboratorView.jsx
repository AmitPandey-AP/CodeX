import React, { useState } from "react";
import { IoShareOutline } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";

const UserCard = ({ name, initial, online }) => (

    <div className="relative flex flex-col items-center shadow-md border-2 border-gray-700 p-1 shadow-gray-800 h-[10%] w-[20%] rounded-md ">

        <div className="bg-rose-700 text-white  w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold">
            {initial}
        </div>

        {online && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></span>
        )}

        <span className="mt-2 text-white">{name}</span>

    </div>
);

const BottomButton = ({ icon, bg = "bg-white", iconColor = "text-black" }) => (
    <button
        className={`${bg} p-4 rounded-lg flex-1 mx-1 flex justify-center items-center`}
    >
        <span className={`text-2xl ${iconColor}`}>{icon}</span>
    </button>
);

const Collab = () => {
    const [users, setUsers] = useState([
        { name: 'edn', online: true },
        { name: 'Ans', online: true },
        { name: 'Ank', online: true },
        { name: 'edn', online: true },
        { name: 'edn', online: true },
        { name: 'edn', online: true },
        { name: 'Dug', online: true },
        { name: 'edn', online: true },
    ]);
    return (
        <div className="bg-[#1e1e1e] text-white p-4 rounded-md w-full max-w-md  border border-gray-600 h-vph flex flex-col">
            <h2 className="text-xl font-semibold">Users</h2>
            <hr className="border-gray-600 my-2" />
            <div className="bg-[#1e1e1e] h-[576px]">

                <div className=" bg-[#1e1e1e] flex flex-wrap space-x-2 space-y-2">

                    {users.map((user, index) => (
                        <UserCard key={index} name={user.name} initial={user.name[0]} online={user.online} />
                    ))}

                </div>

            </div>

            <div className="mt-2 flex items-center rounded-md overflow-hidden text-4xl justify-between px-2">
                <IoShareOutline  className="w-[30%] bg-white text-black p-1 rounded-md cursor-pointer hover:bg-gray-300" />
                <IoCopyOutline className="w-[30%] bg-white text-black p-1 rounded-md cursor-pointer hover:bg-gray-300" />
                <CiLogin className="w-[30%] bg-green-400 text-black p-1 rounded-md cursor-pointer hover:bg-green-600" />

            </div>
        </div>
    );
};

// bg-[#1e1e1e] h-[576px] flex flex-wrap space-x-1 

export default Collab;
