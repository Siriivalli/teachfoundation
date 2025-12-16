import { FaHandsHelping, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 relative">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* LOGO */}
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <FaHandsHelping />
          <span>NGO</span>
        </div>

        {/* BURGER ICON */}
        <button
          className="md:hidden text-primary text-2xl focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <FaBars />
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/programs" className="hover:text-primary">Programs</Link></li>
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
        </ul>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-4 p-6 font-medium">
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="block hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/programs" onClick={() => setOpen(false)} className="block hover:text-primary">
              Programs
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="block hover:text-primary">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
