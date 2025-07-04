import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white  shadow-lg sticky top-0 z-50 px-4 py-[2rem] ">
            {/* Mobile View */}
            <div className="flex justify-between items-center lg:hidden relative">
                {/* Left: Burger */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="z-20">
                    <i className="bi bi-list text-2xl"></i>
                </button>

                {/* Center: Logo */}
                <span className="absolute left-1/2 transform -translate-x-1/2 font-bold italic text-[1.5rem]">REALSTATE</span>

                {/* Right: User */}
                <span className="border px-2 py-1 rounded-full z-20">
                    <i className="bi bi-person text-xl"></i>
                </span>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="flex flex-col gap-2 mt-4 lg:hidden">
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <span className="cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                        Explore <i className={`bi ${showDropdown ? 'bi-arrow-up-short' : 'bi-arrow-down-short'}`}></i>
                    </span>
                    {showDropdown && (
                        <div className="flex flex-col pl-4">
                            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
                            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
                            <NavLink to="/agents" onClick={() => setMenuOpen(false)}>Agent</NavLink>
                        </div>
                    )}
                    <NavLink to="/collections" onClick={() => setMenuOpen(false)}>Collections</NavLink>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </div>
            )}

            {/* Desktop View */}
            <div className="hidden  lg:flex justify-between items-center px-10">
                {/* Left: Logo */}
                <span className="font-bold italic text-[1.5rem]">REALSTATE</span>

                {/* Center: Nav NavLinks */}
                <div className="flex gap-6">
                    <NavLink to="/" className=" transform hover:-translate-y-1 hover:text-shadow-md transition duration-300">Home</NavLink>
                    <div className="relative">
                        <span
                            className="cursor-pointer transform hover:-translate-y-1 hover:text-shadow-md transition duration-300"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            Explore <i className={`bi ${showDropdown ? 'bi-arrow-up-short' : 'bi-arrow-down-short'}`}></i>
                        </span>
                        {showDropdown && (
                            <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md z-10 flex flex-col gap-4 py-4">
                                <NavLink to="/about" className="hover:bg-gray-100 transition duration-200 py-2 px-8" onClick={() => setShowDropdown(false)}>About</NavLink>
                                <NavLink to="/blog" className="hover:bg-gray-100 transition duration-200 py-2 px-8" onClick={() => setShowDropdown(false)}>Blog</NavLink>
                                <NavLink to="/agents" className="hover:bg-gray-100 transition duration-200 py-2 px-8" onClick={() => setShowDropdown(false)}>Agent</NavLink>
                            </div>
                        )}
                    </div>
                    <NavLink to="/collections" className=" transform hover:-translate-y-1 hover:text-shadow-md transition duration-300">Collections</NavLink>
                    <NavLink to="/contact" className=" transform hover:-translate-y-1 hover:text-shadow-md transition duration-300">Contact</NavLink>
                </div>

                {/* Right: Buttons */}
                <div className="flex gap-4 items-center">
                    <NavLink className="border px-2 py-1 rounded-full" to="/login">
                        <i className="bi bi-person text-xl"></i>
                    </NavLink>
                    <NavLink className="bg-[#FFF48E] font-bold px-6 py-2 rounded-full hover:bg-[#e9de7d] transition duration-300" to="/collections">Explore Now</NavLink>
                </div>
            </div>
        </nav>
    );
};
