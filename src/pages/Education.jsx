import digitalliteracy from "../assets/digitalliteracy.jpg"
import skills from "../assets/skills.jpg"
import ai from "../assets/ai.jpg"
import career from "../assets/carrer.jpg"
import training from "../assets/training.jpg"


import { useEffect, useRef, useState } from "react";
export default function Education() {
  const activities = [
    {
      title: " Digital literacy",
      desc: "Digital literacy is important because it empowers individuals to confidently use computers, smartphones, and the internet in their daily lives. It helps people access information, apply for jobs, learn new skills, and stay connected with the world. With strong digital skills, individuals can study online, communicate effectively, manage online services, and improve their career opportunities. Overall, digital literacy builds confidence, increases independence, and opens doors to better education, employment, and personal growth.",
      img: digitalliteracy,   // <-- Use imported image
    },
    {
      title: " Employable skills",
      desc: "Employable skills are the essential abilities that help individuals get a job, perform well at work, and grow in their career. These include communication, teamwork, problem-solving, time management, basic computer skills, and professionalism. Learning employable skills increases a person’s confidence, improves their chances of finding good job opportunities, and helps them adapt to different work environments. Overall, these skills prepare individuals to become job-ready, responsible, and capable of building a stable and successful future.",
      img: skills,  // Replace later with your real image
    },
    {
      title: " AI and coding programs",
      desc: "AI and coding programs teach people how to build and use software and intelligent tools — from writing code that automates tasks to understanding basics of artificial intelligence like data, models, and simple machine learning applications. These programs give learners practical skills such as problem-solving, logical thinking, creating websites or apps, and using AI to analyze data or automate everyday work. By learning coding and AI, participants become more employable (software jobs, data roles, digital services), can start small businesses or freelance, and gain the confidence to adapt as technology changes — ultimately opening pathways to better jobs, higher income, and more control over their future.",
      img: ai,  // Replace later with your real image
    },
    {
      title: " Career counselling",
      desc: "Career counselling helps individuals understand their strengths, interests, and goals so they can choose the right career path with confidence. It provides guidance on education options, job opportunities, required skills, and how to prepare for future careers. Through expert advice and personalized support, career counselling helps people make informed decisions, avoid confusion, set clear goals, and build a strong plan for their future. Overall, it empowers individuals to choose a career that matches their abilities and leads to long-term growth and satisfaction.",
      img: career,  // Replace later with your real image
    },
    {
      title: " Colleges/Schools trainings",
      desc: "Colleges and school trainings provide students with practical knowledge, skill-building activities, and real-world exposure that help them grow academically and personally. These trainings strengthen important skills such as communication, teamwork, leadership, and basic technical abilities, making students more confident and prepared for future opportunities. They also help students understand their interests, choose the right career path, and develop the discipline needed for higher education and professional life. Overall, such training programs build a strong foundation for students to succeed in both studies and future careers.",
      img: training,  // Replace later with your real image
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
       Education & skill development Timeline
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
        CSR in education and skill development focuses on improving learning opportunities, providing better resources, and equipping individuals with practical skills needed for employment and growth. Companies invest in this sector to support scholarships, digital learning tools, infrastructure development, vocational training, teacher training, and career guidance programs. This is important because quality education and strong skills help reduce poverty, increase job opportunities, and empower young people to build stable futures. CSR initiatives bridge the gap between students and modern industry needs by promoting digital literacy, vocational training, entrepreneurship, and employability programs. Overall, CSR in education and skill development strengthens communities, boosts economic growth, and ensures that every child and youth—especially in rural and underserved areas—gets the chance to learn, grow, and succeed.

         </p>
    </div>
  );
}
