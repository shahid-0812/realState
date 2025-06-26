import { useState } from "react";
import { Link } from "react-router-dom"

export const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <nav className="flex bg-[#fff] justify-around items-center py-[2rem] shadow-lg sticky top-0 z-50">
            <span className="font-bold italic text-[1.5rem]">REALSTATE</span>
            <div className="nav-links flex gap-15 relative">
                <Link to="/">Home</Link>
                <div className="relative">
                    <span
                        className="cursor-pointer"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Explore <i className={`bi ${showDropdown ? 'bi-arrow-up-short' : 'bi-arrow-down-short'}`}></i>
                    </span>

                    {showDropdown && (
                        <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md z-10 flex flex-col gap-4  py-4">
                            <Link to="/about" className="  border-b border-transparent hover:bg-gray-100 py-2 px-8 transition duration-100" onClick={() => setShowDropdown(false)}>About</Link>
                            <Link to="/blogs" className=" border-b border-transparent hover:bg-gray-100 py-2 px-8 transition duration-100" onClick={() => setShowDropdown(false)}>Blog</Link>
                            <Link to="/agents" className=" border-b border-transparent hover:bg-gray-100 py-2 px-8 transition duration-100" onClick={() => setShowDropdown(false)}>Agent</Link>
                        </div>
                    )}
                </div>
                <Link to="/collections">Collections</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-buttons flex items-center justify-center gap-4">
                <span className="user-profile bg-rd-400 py-0.5 flex items-center justify-center rounded-4xl px-2 border-1 border-black">
                    <i className="bi bi-person text-[1.25rem]"></i>
                </span>
                <Link className="bg-[#FFF48E] font-bold px-6 py-3 rounded-4xl">Explore Now</Link>
            </div>
        </nav>
    )
}
