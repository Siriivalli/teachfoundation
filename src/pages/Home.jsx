import ProgramCard from "../components/ProgramCard";
import { FaLeaf, FaLightbulb, FaUserGraduate, FaHandHoldingHeart, FaFemale, FaSeedling } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="bg-primary text-white text-center py-20 rounded-b-3xl">
        <h1 className="text-4xl font-bold">Welcome to Our NGO</h1>
        <p className="text-lg mt-2">Working for a Sustainable and Empowered India</p>

        <button className="mt-5 bg-white text-primary px-6 py-3 font-semibold rounded-md hover:bg-secondary">
          Join Us
        </button>
      </div>

      <div className="container mx-auto px-6 mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProgramCard 
          title="Environment & Climate Action" 
          desc="Tree plantation, river cleaning, waste management..." 
          icon={FaLeaf} 
          link="/programs/environment" 
        />
        <ProgramCard 
          title="Entrepreneurship & Innovation" 
          desc="Startup bootcamps, women entrepreneurship..." 
          icon={FaLightbulb} 
          link="/programs/entrepreneurship" 
        />
        <ProgramCard 
          title="Education & Skill Development" 
          desc="Digital literacy, coding, career guidance..." 
          icon={FaUserGraduate} 
          link="/programs/education" 
        />
        <ProgramCard 
          title="Health & Hygiene" 
          desc="Menstrual hygiene, health camps, clean water..." 
          icon={FaHandHoldingHeart} 
          link="/programs/health" 
        />
        <ProgramCard 
          title="Women Empowerment" 
          desc="Skill training, SHG support, safety training..." 
          icon={FaFemale} 
          link="/programs/women" 
        />
        <ProgramCard 
          title="Rural Development" 
          desc="Organic farming, tribal development, livelihood..." 
          icon={FaSeedling} 
          link="/programs/rural" 
        />
      </div>
    </div>
  );
}
