import startupsImg from "../assets/startups.png";   // <-- Correct import
import startupthonsImg from "../assets/startupthons.png"
import womenImg from "../assets/women.png"
import ruralImg from "../assets/rural.png"
import innovationImg from "../assets/innovation.png"
import { useEffect, useRef, useState } from "react";
export default function Entrepreneurship() {
  const activities = [
    {
      title: "Startup Bootcamps",
      desc: "Startup bootcamps are intensive, short-term programs that help aspiring entrepreneurs rapidly turn ideas into viable ventures. They combine hands-on workshops, expert mentoring, and peer collaboration to build core skills in business models, product design, technology, and pitching. These bootcamps create a supportive environment where participants can test their concepts, learn from real-world feedback, and connect with a community of founders, investors, and industry leaders, ultimately accelerating their journey from idea to impact.",
      img: startupsImg,   // <-- Use imported image
    },
    {
      title: "Startupthon Competitions",
      desc: "Startupthon competitions are dynamic events that bring together aspiring entrepreneurs, students, and innovators to collaborate, ideate, and build solutions for real-world challenges. These competitions foster creativity, teamwork, and problem-solving, encouraging participants to develop business ideas, pitch them, and sometimes even launch startups.",
      img: startupthonsImg,  // Replace later with your real image
    },
    {
      title: "Women Entrepreneurship",
      desc: "Women empowerment is about providing women with the confidence, resources, and opportunities to make independent choices and lead fulfilling lives. It involves breaking barriers, encouraging education, supporting entrepreneurship, and ensuring equal rights, helping women contribute meaningfully to society and the economy",
      img: womenImg,  // Replace later with your real image
    },
    {
      title: "Rural Micro-Business Training",
      desc: "Rural micro-business training equips women and youth in villages with practical skills to start and grow small income-generating activities such as tailoring, handicrafts, and food processing. It focuses on hands-on learning, basic financial literacy, and group support so that participants can manage savings, access credit, and run their enterprises confidently. Such training strengthens local livelihoods, reduces dependency on migration, and builds self-reliance and dignity within the community.",
      img: ruralImg,  // Replace later with your real image
    },
    {
      title: "Innovation labs in colleges",
      desc: "Innovation labs in colleges provide students with a creative space to experiment with new ideas, technologies, and solutions to real-world problems. These labs encourage teamwork, hands-on learning, and entrepreneurship by offering access to tools, mentorship, and resources that help students turn their concepts into workable prototypes and startups.",
      img: innovationImg,  // Replace later with your real image
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
    </div>
  );
}
