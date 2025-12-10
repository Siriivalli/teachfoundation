import hygine from "../assets/hygine.jpg"
import camp from "../assets/camp.png"
import water from "../assets/water.webp"
import mentalhealth from "../assets/mentalhealth.avif"
import preventive from "../assets/preventive.jpg"


import { useEffect, useRef, useState } from "react";
export default function Health() {
  const activities = [
    {
      title: " Menstrual hygiene",
      desc: "Menstrual hygiene is important because it helps girls and women manage their periods safely, comfortably, and with confidence. Proper menstrual hygiene includes using clean sanitary products, maintaining personal cleanliness, and understanding how to care for one’s health during menstruation. It prevents infections, reduces discomfort, and encourages regular school or work attendance. By spreading awareness and providing access to the right products, menstrual hygiene empowers girls and women to live healthy, dignified lives without fear or shame.",
      img: hygine,   // <-- Use imported image
    },
    {
      title: " Rural health camp",
      desc: "Rural health camps are community-based medical programs designed to bring essential healthcare services directly to villages where hospitals and doctors are often unavailable. These camps provide free check-ups, medicines, vaccinations, screenings for common diseases, and health awareness sessions. They are important because they help detect illnesses early, reduce health risks, and educate people about hygiene, nutrition, maternal care, and preventive health practices. By offering immediate treatment and guiding people on when to seek advanced care, rural health camps improve the overall well-being of underserved communities. They ensure that even the poorest and most remote families receive timely, affordable, and life-saving healthcare support.",
      img: camp,  // Replace later with your real image
    },
    {
      title: " Sanitation and clean water",
      desc: "Sanitation and clean water are essential for maintaining good health and preventing the spread of diseases in communities. Proper sanitation includes using clean toilets, practicing good hygiene, and safely managing waste, while clean drinking water protects people from waterborne illnesses. These services are especially important in rural and underserved areas, where lack of access can lead to serious health problems, poor school attendance, and reduced productivity. By promoting hygiene awareness, building safe toilets, and providing clean water facilities, communities become healthier, safer, and more empowered to lead better lives. Overall, sanitation and clean water are the foundation for good health, dignity, and sustainable development.",
      img: water,  // Replace later with your real image
    },
    {
      title: " Mental health awareness",
      desc: "Mental health awareness helps individuals understand the importance of emotional well-being, stress management, and seeking support when needed. It encourages people to talk openly about their feelings, reduces stigma around mental health issues, and promotes early detection of problems like anxiety, depression, and stress. By educating communities about healthy coping methods, counseling support, and the value of self-care, mental health awareness empowers people to lead happier, balanced, and more productive lives. Overall, it strengthens emotional resilience, improves relationships, and builds a supportive environment where everyone feels heard, valued, and cared for.",
      img: mentalhealth,  // Replace later with your real image
    },
    {
      title: " Preventive healthcare",
      desc: "Preventive healthcare focuses on reducing the risk of diseases before they occur by promoting healthy habits, regular check-ups, vaccinations, and early screenings. It is important because it helps people detect health issues at an early stage, avoid serious illnesses, and maintain a better quality of life. By educating communities about nutrition, hygiene, exercise, and disease prevention, preventive healthcare lowers medical costs, reduces hospital visits, and strengthens overall well-being. It empowers individuals to take responsibility for their health and supports healthier, longer, and more productive lives.",
      img: preventive,  // Replace later with your real image
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
       Health & Hygiene
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
        Health and hygiene projects have a strong community impact because they directly improve people’s daily lives by preventing diseases, reducing medical expenses, and creating healthier, more productive communities. When families have access to clean water, proper sanitation, menstrual hygiene awareness, and basic healthcare, the overall wellbeing of the entire community improves, especially for women and children. These initiatives also create long-term benefits such as higher school attendance, better nutrition, fewer illnesses, and stronger resilience during health crises. Because health is a fundamental human need, donors and CSR partners strongly support this sector—they see immediate, measurable results, high social return on investment, and the chance to create visible, life-changing improvements in underserved areas. This is why Health & Hygiene consistently attracts high funding and remains a top priority in CSR programs.
         </p>
    </div>
  );
}
