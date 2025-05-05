import React from "react";
import { ArrowRight } from "lucide-react";
import logoTransparent from "../assets/logoTransparent.png";
import { Link } from "react-router-dom"
import { useAppContext } from "../Context/AppContext";

const TryCodeXButton = () => {
    const { navigate } = useAppContext();
    return (
        <button
            onClick={() => {
                navigate("/login")
            }
            } className="flex items-center justify-start gap-2 bg-white text-black font-medium px-4 py-2 cursor-pointer hover:bg-blue-300 rounded-lg shadow-md hover:shadow-lg transition text-sm">
            Try CodeX
            <ArrowRight className="w-4 h-4 " />
        </button>
    );
};

const Navbar = () => {

    return (
        <nav className="w-full px-4 md:px-6 bg-zinc-800 text-white shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logoTransparent}
                        alt="CodeX"
                        className="contrast-300 brightness-200 h-14 w-auto object-contain"
                    />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <TryCodeXButton />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
