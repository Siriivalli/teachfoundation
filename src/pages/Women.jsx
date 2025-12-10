import training from "../assets/training.jpg"
import safety from "../assets/safety.jpg"
import finance from "../assets/finance.jpg"
import entrepreneur from "../assets/Entrepreneurship.webp"
import selfhelp from "../assets/selfhelp.webp"


import { useEffect, useRef, useState } from "react";
export default function Women() {
  const activities = [
    {
      title: "Skill training",
      desc: "Skill training for women plays a crucial role in promoting empowerment by helping them gain financial independence, confidence, and social equality. Through vocational courses, digital literacy, entrepreneurship training, and job-oriented skills, women are able to secure better employment opportunities, start small businesses, and contribute to household and community income. This not only improves their quality of life but also strengthens families and boosts local economies. Empowered women make informed decisions about health, education, and finances, creating a positive ripple effect across generations. Skill training programs are therefore one of the most effective ways to break cycles of poverty, reduce gender inequality, and build inclusive, self-reliant communities.",
      img: training,   // <-- Use imported image
    },
    {
      title: " Safety training",
      desc: "Safety training equips individuals with the knowledge and skills needed to protect themselves and others in workplaces, schools, communities, and daily life. It includes awareness of hazards, safe handling of tools and equipment, emergency response, first aid, and understanding basic safety protocols. This training is important because it reduces accidents, injuries, and health risks, while building a culture of responsibility and preparedness. For women, youth, and workers in rural or vulnerable communities, safety training increases confidence, promotes self-protection, and supports safer working environments. By preventing avoidable incidents and improving overall wellbeing, safety training creates stronger, more resilient communities and contributes to long-term development and empowerment.",
      img: safety,  // Replace later with your real image
    },
    {
      title: " Financial literacy",
      desc: "Financial literacy helps individuals understand how to manage money wisely, make informed financial decisions, and build secure futures. It includes basic skills like budgeting, saving, banking, understanding interest, using digital payments, and avoiding debt or financial fraud. This knowledge is especially important for women, youth, and rural communities who often lack access to formal financial education. When people learn how to plan expenses, save for emergencies, invest responsibly, and access government or banking services, they gain confidence and financial independence. Financial literacy reduces poverty, prevents exploitation, and empowers families to improve their standard of living. Overall, it creates economically stable households and stronger, more resilient communities.",
      img: finance,  // Replace later with your real image
    },
    {
      title: " Entrepreneurship program",
      desc: "Entrepreneurship programs empower individuals to start and grow their own businesses by teaching them essential skills such as idea development, financial planning, marketing, communication, and problem-solving. These programs are important because they create employment opportunities, reduce dependence on traditional jobs, and encourage innovation within communities. For women, youth, and rural populations, entrepreneurship training provides a pathway to financial independence and helps them turn local challenges into sustainable business opportunities. With support such as mentorship, market linkages, and access to micro-finance, participants gain the confidence and tools needed to build successful enterprises. Overall, entrepreneurship programs boost economic growth, strengthen communities, and promote long-term self-reliance.",
      img: entrepreneur,  // Replace later with your real image Is kar SE AAP SE dur
    },
    {
      title: " Self help group support",
      desc: "Self-Help Group (SHG) support empowers women and rural communities by helping them come together in small groups to save money, access loans, and build collective strength. SHGs provide a safe platform for women to learn financial management, start small businesses, and support each other's social and economic growth. This approach is important because it increases financial independence, reduces reliance on moneylenders, and builds confidence and leadership skills among members. With training in entrepreneurship, bookkeeping, digital payments, and livelihood activities, SHGs become powerful drivers of community development. SHG support not only improves household income but also leads to better education, health, and decision-making for families, creating stronger, self-reliant, and resilient communities.",
      img: selfhelp,  // Replace later with your real image
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
      Women empowerment
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
       Indian and global donors dedicate funds to NGOs because they see high-impact, transparent, and measurable results that create real change in communities. Donors prefer supporting focused programs in areas like education, health, skill development, and women empowerment because these sectors directly uplift vulnerable groups and contribute to long-term nation-building. International donors invest because India has a large population with diverse development needs, offering opportunities to create scalable and sustainable impact. Indian CSR donors contribute because they are legally encouraged through the CSR mandate and want to build stronger communities around their operations. When NGOs show accountability, proper reporting, strong community engagement, and visible outcomes, donors feel confident that their contributions are creating meaningful, lasting change. This trust and clarity motivate both Indian and global donors to provide dedicated, long-term funding support. </p>
    </div>
  );
}
