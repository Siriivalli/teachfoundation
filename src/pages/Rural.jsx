import support from "../assets/support.jpg"
import organic from "../assets/organic.webp"
import tribal from "../assets/tribal.jpg"
import microbusiness from "../assets/microbusiness.jpeg"
import handicraft from "../assets/handicraft.jpeg"


import { useEffect, useRef, useState } from "react";
export default function Rural() {
  const activities = [
    {
      title: " Farmer support",
      desc: "Farmer support programs help strengthen rural livelihoods by providing farmers with modern agricultural knowledge, improved tools, quality seeds, soil testing, and access to sustainable farming practices. These initiatives are important because most rural families depend on farming, yet face challenges like low productivity, climate change, limited market access, and lack of financial resources. By offering training in organic farming, water management, crop diversification, and digital agriculture, NGOs empower farmers to increase their yield and income. Support such as crop insurance awareness, access to government schemes, and direct market linkages reduces risks and ensures fair prices. Overall, farmer support improves food security, stabilizes rural economies, and builds stronger, more resilient agricultural communities.",
      img: support,   // <-- Use imported image
    },
    {
      title: " Organic farming",
      desc: "Organic farming promotes healthy food production by avoiding chemical fertilizers and pesticides and using natural methods that protect soil, water, and biodiversity. It is important because it improves soil fertility, reduces pollution, enhances crop quality, and supports long-term sustainability for farmers and the environment. Organic produce is safer for consumers, healthier for families, and fetches better market prices, helping farmers increase their income. By adopting practices like composting, crop rotation, bio-fertilizers, and natural pest control, farmers reduce their dependence on costly chemicals and build climate-resilient farms. Organic farming not only strengthens rural livelihoods but also supports ecological balance and ensures a healthier future for communities.",
      img: organic,  // Replace later with your real image
    },
    {
      title: " Tribal develop",
      desc: "Tribal development focuses on improving the socio-economic conditions of tribal communities while preserving their culture, identity, and traditional knowledge. It is important because many tribal groups face challenges like limited access to education, healthcare, livelihood opportunities, and basic infrastructure. By providing skill development, education, healthcare support, sustainable livelihood training, and access to government schemes, tribal development programs empower communities to become self-reliant and improve their quality of life. These initiatives also promote forest-based livelihoods, protect land rights, and support traditional crafts, helping tribal families earn a stable income. Strengthening tribal communities creates long-term social inclusion, reduces poverty, and ensures that tribal heritage continues to thrive alongside modern development.",
      img: tribal,  // Replace later with your real image
    },
    {
      title: "Rural micro-enterprises",
      desc: "Rural microenterprises are small, locally owned businesses that help villagers earn a stable income by using local skills, resources, and traditions. They are important because they create employment within rural communities, reduce migration to cities, and support economic self-reliance for families. By promoting activities like handicrafts, food processing, tailoring, dairy, small retail, and agri-based businesses, microenterprises enable rural youth and women to start their own ventures with low investment. These enterprises increase household income, boost local markets, and strengthen community resilience. When supported through training, mentorship, access to credit, and market linkages, rural microenterprises become powerful tools for poverty reduction, women’s empowerment, and sustainable development in underserved villages.",
      img: microbusiness,  // Replace later with your real image Is kar SE AAP SE dur
    },
    {
      title: " Handicraft promotion",
      desc: "Handicraft promotion supports traditional artisans by helping them preserve their cultural skills while earning a sustainable income through handmade products. It is important because many skilled craftsmen in rural and tribal areas struggle with low wages, lack of market access, and declining demand due to mass-produced goods. By providing design training, modern tools, branding support, and connections to local and global markets, handicraft promotion helps artisans improve product quality and increase their earnings. It also preserves cultural heritage, encourages eco-friendly production using natural materials, and creates dignified livelihood opportunities, especially for women and marginalized communities. Strengthening handicrafts not only boosts rural economies but also ensures that India’s rich artistic traditions continue to thrive for future generations.",
      img: handicraft,  // Replace later with your real image
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
      Rural department and livelihood
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
       Government, CSR, and NGOs strongly support rural upliftment because rural areas form the backbone of India’s population, agriculture, and economy, yet they face major gaps in education, healthcare, livelihoods, and infrastructure. Investing in rural development creates long-term national growth by reducing poverty, improving living standards, and empowering marginalized communities. For the government, rural progress strengthens social inclusion and economic stability; for CSR, it delivers high-impact, measurable results aligned with sustainability goals; and for NGOs, it provides a ground-level platform to implement meaningful, people-centric development. When all three work together, they bring resources, expertise, innovation, and community trust, leading to stronger livelihoods, better health and education outcomes, women’s empowerment, and overall community resilience. This combined support creates transformational and sustainable change, making rural upliftment one of the most impactful areas for development in India. </p>
    </div>
  );
}
