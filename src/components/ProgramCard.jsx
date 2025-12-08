import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ProgramCard({ title, desc, icon, link }) {
  const Icon = icon;

  return (
    <Link to={link}>
      <div className="p-6 bg-white shadow-lg rounded-xl border-l-4 border-primary hover:scale-[1.02] transition cursor-pointer">
        <div className="text-primary text-3xl mb-3">
          <Icon />
        </div>

        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700 mt-2">{desc}</p>

        <div className="flex items-center gap-2 text-primary font-medium mt-3">
          Learn More <FaArrowRight />
        </div>
      </div>
    </Link>
  );
}
