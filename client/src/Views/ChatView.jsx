import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';

export default function GroupChat() {
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
        if (input.trim()) {
            setMessages([...messages, { sender: 'edn', text: input, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
            setInput('');
        }
    };

    return (
        <div className="bg-[#1e1e1e] text-white p-4 rounded-md w-full max-w-md  border border-gray-600 h-vph flex flex-col">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-1">Group Chat</h2>

            {/* Chat messages container */}
            <div className="bg-[#1e1e1e] h-[576px] overflow-y-auto space-y-1 scrollbar">
                {messages.map((msg, index) => (
                    <div key={index} className="bg-[#1e1e1e] p-2 rounded-md flex justify-between items-start border-2 border-gray-700">
                        <div>
                            <p className="text-green-400 text-sm font-semibold">{msg.sender}</p>
                            <p className="text-white text-sm">{msg.text}</p>
                        </div>
                        <span className="text-xs text-gray-400 ml-2">{msg.time}</span>
                    </div>
                ))}
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
