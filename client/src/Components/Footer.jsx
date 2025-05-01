import React from "react";
import logoTransparent from "../assets/logoTransparent.png";
import { Link } from "react-router-dom"
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-700 text-gray-300 py-8 shadow-zinc-800 shadow-up ">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Codex Logo / Name */}
                <div className="flex items-center">
                    <img
                        src={logoTransparent}
                        alt="CodeX"
                        className="contrast-300 brightness-200 h-14 w-auto object-contain"
                    />
                </div>

                <div className="mt-6 text-center text-md text-gray-500">
                    © {new Date().getFullYear()} Codex. Built with ♥ using React & Tailwind.
                </div>


                <div className="flex space-x-4">
                    <Link href="#" aria-label="Twitter" className="hover:text-blue-400 text-2xl">
                        <FaTwitter/>
                    </Link>
                    <Link href="#" aria-label="GitHub" className="hover:text-gray-300 text-2xl">
                        <FaGithub/>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
