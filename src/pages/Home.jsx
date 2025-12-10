import ProgramCard from "../components/ProgramCard";
import { FaLeaf, FaLightbulb, FaUserGraduate, FaHandHoldingHeart, FaFemale, FaSeedling } from "react-icons/fa";
import bannerImg from "../assets/ngobanner2.png";   // ✅ your banner image

export default function Home() {
return ( 
  
<div>

  {/* HERO SECTION WITH IMAGE */}
  <div 
  className="relative h-screen w-full flex items-center justify-center text-center"
  style={{
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Text on top */}
  <div className="relative z-10 text-white">
    <h1 className="text-4xl font-bold drop-shadow-lg">Welcome to Our NGO</h1>
    <p className="text-lg mt-2 drop-shadow-lg">
      Working for a Sustainable and Empowered India
    </p>

    <button className="mt-5 bg-white text-primary px-6 py-3 font-semibold rounded-md hover:bg-secondary">
      Join Us
    </button>
  </div>
</div>


  {/* PROGRAM CARDS */}
  <h1 className="text-3xl font-bold text-primary">Our Programs</h1>
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
