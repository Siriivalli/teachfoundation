import { FaHandsHelping, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 text-primary font-bold text-xl">
        <FaHandsHelping />
        <span>NGO</span>
      </div>

      <button className="md:hidden text-primary text-2xl" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      <ul className={`md:flex gap-8 font-medium ${open ? "block" : "hidden"} md:block`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/programs">Programs</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary">
          Donate
        </button>
      </ul>
    </nav>
  );
}