import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="flex bg-[#fff] justify-around items-center py-[2rem]">
            <span className="font-bold italic text-[1.5rem]">REALSTATE</span>
            <div className="nav-links flex gap-15">
                <Link to="/">Home</Link>
                <span>explore </span>
                <Link>Collections</Link>
                <Link>Contact</Link>
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
