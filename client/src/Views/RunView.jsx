import React, { useState } from 'react';
import { FaRegCopy } from "react-icons/fa6";

export default function RunCodePanel() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [language, setLanguage] = useState('javascript');

    const handleRun = () => {
        // Simulate running code
        setOutput(`Running ${language} code...\n\nInput:\n${input}`);
    };

    return (
        <div className="bg-[#1e1e1e] text-white p-4 rounded-md w-full max-w-md border border-gray-600">
            <h2 className="text-lg font-semibold mb-2 border-b border-gray-600 pb-1">Run Code</h2>

            {/* Language Dropdown */}
            <select
                className="w-full p-2 rounded-md bg-[#2d2d2d] text-white border border-gray-700 mb-2"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
                <option value="javascript">javascript (1.32.3)</option>
                <option value="python">python (3.11.0)</option>
                <option value="cpp">C++ (GCC 11)</option>
                {/* Add more options as needed */}
            </select>

            {/* Input Textarea */}
            <textarea
                placeholder="Write your input here..."
                className="w-full h-24 p-2 rounded-md bg-[#2d2d2d] text-white border border-gray-700 resize-none mb-2"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />

            {/* Run Button */}
            <button
                className="w-full bg-green-500 text-black font-semibold py-2 rounded-md hover:bg-green-400 transition"
                onClick={handleRun}
            >
                Run
            </button>

            {/* Output Section */}
            <div className="mt-4">
                <div className="flex justify-between items-center text-sm mb-1">
                    <span>Output :</span>
                    <button
                        className="text-gray-400 hover:text-white"
                        onClick={() => navigator.clipboard.writeText(output)}
                    >
                        {<FaRegCopy/>}
                    </button>
                </div>
                <div className="w-full h-40 p-2 bg-[#2d2d2d] text-white rounded-md border border-gray-700 overflow-y-auto whitespace-pre-wrap">
                    {output}
                </div>
            </div>
        </div>
    );
}
