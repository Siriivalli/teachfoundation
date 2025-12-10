import wasteImg from "../assets/waste.png";   // <-- Correct import
import plasticImg from "../assets/plastic.png"
import riversImg from "../assets/rivers.png"
import treesImg from "../assets/trees.png"
import tourismImg from "../assets/tourism.png"
import { useEffect, useRef, useState } from "react";
export default function Environment() {
  const activities = [
    {
      title: "Waste management",
      desc: "Effective waste management is essential to protect public health, reduce pollution, and keep our neighborhoods clean and livable. By segregating waste at source into wet, dry, and hazardous streams, communities can increase recycling, support composting, and reduce the load on landfills. When citizens, NGOs, and local governments collaborate through clean-up drives, awareness programs, and door-to-door collection, they help build greener cities and create new opportunities in recycling and resource recovery.",
      img: wasteImg,   // <-- Use imported image
    },
    {
      title: "Plastic reduction",
      desc: "Reducing plastic use is one of the simplest ways to protect the environment and our health. By choosing reusable bags and bottles, properly segregating plastic waste for recycling, and avoiding single‑use items, communities can cut pollution in landfills, streets, and oceans. These small daily actions conserve resources, reduce greenhouse gas emissions, and help keep parks, rivers, and neighborhoods clean for everyone",
      img: plasticImg,  // Replace later with your real image
    },
    {
      title: "Clean Himalaya / Clean river missions",
      desc: "Clean Himalaya and clean river missions aim to protect fragile mountain ecosystems, safeguard drinking water, and preserve the cultural and spiritual value of rivers. These campaigns encourage citizens to remove litter from riverbanks, reduce plastic use, and manage waste responsibly so it does not flow downstream into towns and oceans. By involving local communities, tourists, schools, and NGOs, such initiatives help restore water quality, support biodiversity, and ensure that future generations can enjoy healthy rivers and pristine Himalayan landscapes.",
      img: riversImg,  // Replace later with your real image
    },
    {
      title: "Tree plantation & Biodiversity projects",
      desc: "Tree plantation plays a vital role in conserving biodiversity by creating and connecting habitats for countless species of plants, insects, birds, and animals. When native trees are planted and protected, they stabilize soil, enrich it with organic matter, and provide food and shelter that support complex, resilient ecosystems. Large, diverse green areas also act as carbon sinks, help regulate local climate, and maintain clean air and water, which are essential for both wildlife and human communities.",
      img: treesImg,  // Replace later with your real image
    },
    {
      title: "Sustainable tourism",
      desc: "Sustainable tourism is a way of traveling that protects the environment, respects local cultures, and benefits local communities. It focuses on reducing pollution and waste, conserving natural resources, and supporting businesses that treat workers fairly. By choosing eco‑friendly transport and stays, avoiding over‑touristed spots, and engaging responsibly with local people and wildlife, travelers help ensure that destinations remain healthy and vibrant for future generations.",
      img: tourismImg,  // Replace later with your real image
    },

    // add more activities...
  ];
  const refs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-150px 0px -150px 0px",
      }
    );


    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 mt-20">
      <h1 className="text-3xl font-bold text-primary text-center mb-16">
        Environment & Climate Action Timeline
      </h1>

      
      <div className="relative">

        {/* BACKGROUND LINE */}
        <div className="
        absolute left-1.5 top-0 bottom-0 w-1 bg-gray-300
        md:left-1/2 md:-translate-x-1/2
        
      "></div>

        {/* PROGRESS FILL LINE */}
        <div
          className="
          absolute left-1.5 top-0 w-1 bg-primary transition-all duration-700
          md:left-1/2 md:-translate-x-1/2
         
        "
          style={{
            height: `${((activeIndex + 1) / activities.length) * 100}%`,
          }}
        ></div>
        
        {/* Timeline Items */}
        {activities.map((activity, index) => {
          const isActive = activeIndex === index;
          const isLeft = index % 2 === 0; // alternate animation

          return (
            <div
              key={index}
              data-index={index}
              ref={(el) => (refs.current[index] = el)}
              className="relative flex flex-col md:flex-row items-center mb-32"
            >
              {/* IMAGE SIDE */}
              <div
                className={`w-full  md:w-1/2 flex justify-end md:pr-10 transition-all duration-700
                  ${isActive ? "opacity-100" : "opacity-20"}
                  ${isActive ? (isLeft ? "translate-x-0" : "translate-x-0") : isLeft ? "-translate-x-16" : "translate-x-16"}
                `}
              >
                <img
                  src={activity.img}
                  alt={activity.title}
                  className="w-full max-w-[350px] md:w-[380px] h-[220px] md:h-[250px] object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* NUMBER CIRCLE */}
              <div className="absolute left-1.5 md:left-1/2 -translate-x-1/2 z-10">
                <div
                  className={`w-9 h-9 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-all duration-700
                    ${activeIndex >= index
                      ? "bg-primary text-white scale-125"
                      : "bg-gray-300 text-gray-700 scale-75"
                    }
                  `}
                >
                  {index + 1}
                </div>
              </div>

              {/* TEXT SIDE */}
              <div
                className={`w-full md:w-1/2 pl-10 transition-all duration-700
                  ${isActive ? "opacity-100" : "opacity-20"}
                  ${isActive
                    ? isLeft
                      ? "translate-x-0"
                      : "translate-x-0"
                    : isLeft
                      ? "translate-x-16"
                      : "-translate-x-16"
                  }
                `}
              >
                <h2 className="text-2xl font-semibold text-primary">
                  {activity.title}
                </h2>
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {activity.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-left text-gray-700 mt-10 px-4 md:px-0">


         Environment and climate action sit at the heart of our work because a healthy planet is the foundation for every community’s well‑being. Our initiatives span responsible waste management and plastic reduction, clean Himalaya and clean river missions, tree plantation and biodiversity restoration, and the promotion of truly sustainable tourism. By tackling waste and plastic at the source, we prevent pollution on land and in water while encouraging circular use of resources. Through river and mountain clean‑ups, along with large-scale native tree planting, we protect fragile ecosystems, safeguard drinking water, and support wildlife habitats. By engaging citizens, local governments, and businesses in sustainable travel practices, we help ensure that economic growth in these regions does not come at the cost of nature. Together, these focus areas directly align with the highest priorities of CSR programs, government policies, and public expectations, creating visible, measurable impact for both people and the planet.
      </p>
    </div>
  );
}
