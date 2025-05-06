import React, { useEffect, useState,useRef } from 'react';
import { IoSend } from 'react-icons/io5';
import createSocketConnection from '../Utils/socket'
import { useAppContext } from '../Context/AppContext';
const socket = createSocketConnection();

export default function GroupChat() {
    const bottomRef = useRef(null);
    const { currentUser } = useAppContext()
    const [messages, setMessages] = useState([
        { sender: 'edn', text: 'hfw', time: '2:52 PM' },
        { sender: 'edn', text: 'ewhb', time: '2:52 PM' },
        { sender: 'edn', text: 'd', time: '2:52 PM' },
        { sender: 'edn', text: 'd', time: '2:52 PM' },
        { sender: 'edn', text: 'd', time: '2:52 PM' },
        { sender: 'edn', text: 'd', time: '2:52 PM' },
        { sender: 'edn', text: 'd', time: '2:52 PM' },
        { sender: 'edn', text: 'd', time: '2:52 PM' },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        socket.emit('sendMessage', { text: input, roomId: currentUser.roomId });
        if (input.trim()) {
            setMessages([...messages, { sender: 'You', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
            setInput('');
        }
    };
    useEffect(() => {
    socket.on('connect',()=>{
        console.log("connection send");
    })    
    socket.emit('join-room', { roomId: currentUser.roomId });
    console.log("message aya hai");

    const handler = (data) => {
        console.log("bhai ye aya hua message hai", data);
        setMessages(prevMessages => [...prevMessages, data]);
    };
    socket.on("messageReceived", handler);
        return () => {
            socket.off("messageReceived", handler);
        };
        
    },[currentUser.roomId])
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, [messages]);
    return (
        <div className="bg-[#1e1e1e] text-white p-4 rounded-md w-full max-w-md  border border-gray-600 h-vph flex flex-col">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-1">Group Chat</h2>

            {/* Chat messages container */}
            <div className="bg-[#1e1e1e] h-[576px] overflow-y-auto space-y-1 scrollbar">
                {messages.map((msg, index) => (
                    <div key={index} className={`${msg.sender==="You"? "ml-50":""} bg-[#1e1e1e] p-2 rounded-md flex justify-between items-start border-2 border-gray-700 w-[200px]`}>
                        <div >
                            <p className="text-green-400 text-sm font-semibold">{msg.sender}</p>
                            <p className="text-white text-sm">{msg.text}</p>
                        </div>
                        <span className="text-xs text-gray-400 ml-2">{msg.time}</span>
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input field */}
            <div className="mt-2 flex items-center border border-green-500 rounded-md overflow-hidden">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Enter a message..."
                    className="flex-1 bg-transparent px-3 py-2 text-white outline-none"
                />
                <button
                    onClick={handleSend}
                    className="bg-green-500 hover:bg-green-400 text-black p-2"
                >
                    <IoSend size={20} />
                </button>
            </div>
        </div>
    );
}


// import React,{useState} from 'react'

// const ChatView = () => {
//     const [message, setMessga] = useState();
//     const sendMessage=() => {
    
//     }
//     return (
//         <div className='border w-[376px]'>
//             <div className="chat chat-start">
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         <img
//                             alt="Tailwind CSS chat bubble component"
//                             src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
//                         />
//                     </div>
//                 </div>
//                 <div className="chat-header">
//                     Obi-Wan Kenobi
//                     <time className="text-xs opacity-50">12:45</time>
//                 </div>
//                 <div className="chat-bubble">You were the Chosen One!</div>
//                 <div className="chat-footer opacity-50">Delivered</div>
//             </div>
//             <div className="chat chat-end">
//                 <div className="chat-image avatar">
//                     <div className="w-10 rounded-full">
//                         <img
//                             alt="Tailwind CSS chat bubble component"
//                             src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
//                         />
//                     </div>
//                 </div>
//                 <div className="chat-header">
//                     Anakin
//                     <time className="text-xs opacity-50">12:46</time>
//                 </div>
//                 <div className="chat-bubble">I hate you!</div>
//                 <div className="chat-footer opacity-50">Seen at 12:46</div>
//             </div>
//             <input
//                 type="text"
//                 value={message}
//                 onChange={(e)=>setMessage(e.target.value)}
//             />
//             <button onClick={sendMessage}></button>
//         </div>
//     )
// }

// export default ChatView