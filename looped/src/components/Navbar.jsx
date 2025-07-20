import {
    Search,
    Plus,
    Menu,
    X,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [createOpen, setCreateOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const username = "username";

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md backdrop-blur-lg border-b border-white/10 overflow-visible">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-[64px]">
                {/* Left: Logo */}
                <div className="flex items-center space-x-3 justify-center">
                    <img
                        src="/src/assets/looped-white3.svg"
                        alt="Looped Logo"
                        className="h-30 object-contain"
                    />
                </div>

                {/* Right: Buttons */}
                <div className="flex items-center space-x-4">
                    {/* Profile Button */}
                    <div className="hidden md:flex items-center space-x-2 cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-white/70"></div>
                        <span className="font-medium text-white">{username}</span>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 overflow-visible">
                        <a href="#" className="text-white hover:text-gray-300 transition">
                            Albums
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition">
                            Playlists
                        </a>
                        <a href="#" className="text-white hover:text-gray-300 transition">
                            Loopers
                        </a>

                        {/* Create Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setCreateOpen((prev) => !prev)}
                                className="font-pixelateddisplay btn-hover-pink flex items-center bg-white text-[#530B73] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition border border-white"
                                style={{ backgroundColor: "#fff" }}
                            >
                                <Plus size={16} className="mr-1" />
                                Create
                                {createOpen ? (
                                    <ChevronUp size={16} className="ml-1" />
                                ) : (
                                    <ChevronDown size={16} className="ml-1" />
                                )}
                            </button>

                            {createOpen && (
                                <div className="absolute right-0 mt-2 bg-white text-[#530B73] rounded-md shadow-lg w-40 z-50">
                                    <button className="btn-hover-pink block w-full text-left px-4 py-2 hover:bg-gray-100">
                                        Review
                                    </button>
                                    <hr className="border-t border-[#530B73]/20" />
                                    <button className="btn-hover-pink block w-full text-left px-4 py-2 hover:bg-gray-100">
                                        Playlist
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Search Icon */}
                        <button className="p-0">
                            <Search size={20} className="text-white" />
                        </button>
                    </div>

                    {/* Mobile Search Icon (outside hamburger) */}
                    <div className="md:hidden">
                        <button className="p-0 mr-2">
                            <Search size={24} className="text-white" />
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden">
                        <button onClick={() => setMenuOpen((prev) => !prev)}>
                            {menuOpen ? (
                                <X size={24} className="text-white" />
                            ) : (
                                <Menu size={24} className="text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center bg-black text-white py-4 space-y-4">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <div className="w-6 h-6 rounded-full bg-white/70"></div>
                        <span className="font-medium text-white">{username}</span>
                    </div>

                    <a href="#" className="text-white hover:text-gray-300 transition">
                        Albums
                    </a>
                    <hr className="border-t border-white/20 w-1/2" />

                    <a href="#" className="text-white hover:text-gray-300 transition">
                        Playlists
                    </a>
                    <hr className="border-t border-white/20 w-1/2" />

                    <a href="#" className="text-white hover:text-gray-300 transition">
                        Loopers
                    </a>
                    <hr className="border-t border-white/20 w-1/2" />

                    {/* Create Dropdown in Mobile */}
                    <div className="relative">
                        <button
                            onClick={() => setCreateOpen((prev) => !prev)}
                            className="font-pixelateddisplay btn-hover-pink flex items-center bg-white text-[#530B73] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition border border-white"
                            style={{ backgroundColor: "#fff" }}
                        >
                            <Plus size={16} className="mr-1" />
                            Create
                            {createOpen ? (
                                <ChevronUp size={16} className="ml-1" />
                            ) : (
                                <ChevronDown size={16} className="ml-1" />
                            )}
                        </button>

                        {createOpen && (
                            <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white text-[#530B73] rounded-md shadow-lg w-40 z-50 text-center">
                                <button className="btn-hover-pink block w-full px-4 py-2 hover:bg-gray-100">
                                    Review
                                </button>
                                <hr className="border-t border-[#530B73]/20" />
                                <button className="btn-hover-pink block w-full px-4 py-2 hover:bg-gray-100">
                                    Playlist
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
