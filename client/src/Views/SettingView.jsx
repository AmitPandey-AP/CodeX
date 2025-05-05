import React, { useState } from 'react';

export default function SettingsPanel() {
    const [fontSize, setFontSize] = useState(16);
    const [fontFamily, setFontFamily] = useState('Space Mono');
    const [theme, setTheme] = useState('Dracula');
    const [language, setLanguage] = useState('Javascript');
    const op = [12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <div className="bg-[#1e1e1e]  text-white p-6 rounded-md w-full max-w-md space-y-6">
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2">Settings</h2>

            {/* Font Family */}
            <div>
                <label className="block mb-1">Font Family</label>
                <div className="flex gap-2">
                    <select
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        className="bg-[#222222]  text-white px-3 py-2 rounded w-full"
                    >
                        <option>Space Mono</option>
                        <option>Fira Code</option>
                        <option>Monaco</option>
                    </select>
                    <select
                        value={fontSize}
                        onChange={(e) => setFontSize(e.target.value)}
                        className="bg-[#222222]  text-white px-3 py-2 rounded w-full"
                    >
                        {op.map((e, index) => (
                            <option key={index} value={e}>
                                {e}
                            </option>
                        ))}



                    </select>
                </div>
            </div>

            {/* Theme */}
            <div>
                <label className="block mb-1">Theme</label>
                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="bg-[#222222]  text-white px-3 py-2 rounded w-full"
                >
                    <option>Dracula</option>
                    <option>Light</option>
                    <option>Dark</option>
                </select>
            </div>

            {/* Language */}
            <div>
                <label className="block mb-1">Language</label>
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-[#222222]  text-white px-3 py-2 rounded w-full"
                >
                    <option>Javascript</option>
                    <option>Python</option>
                    <option>TypeScript</option>
                </select>
            </div>

            {/* Reset Button */}
            <button
                onClick={() => {
                    setFontFamily('Space Mono');
                    setFontSize(16);
                    setTheme('Dracula');
                    setLanguage('Javascript');
                }}
                className="w-full bg-[#2f2f2f]  hover:bg-green-600 text-white py-2 rounded"
            >
                Reset to default
            </button>
        </div>
    );
}
