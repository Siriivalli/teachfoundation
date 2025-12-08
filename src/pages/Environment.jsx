import wasteImg from "../assets/waste.png";   // <-- Correct import
import plasticImg from "../assets/plastic.png"
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
    // add more activities...
  ];

  return (
    <div className="container mx-auto px-6 mt-20">
      <h1 className="text-3xl font-bold text-primary text-center mb-16">
        Environment & Climate Action Timeline
      </h1>

      <div className="relative">
        {/* Vertical Middle Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary -translate-x-1/2"></div>

        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative flex items-center mb-24"
          >
            {/* Left Side Image */}
            <div className="w-1/2 pr-10 flex justify-end">
              <img
                src={activity.img}
                alt={activity.title}
                className="w-[380px] h-[250px] object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Number Circle */}
            <div className="absolute left-1/2 -translate-x-1/2 z-10">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                {index + 1}
              </div>
            </div>

            {/* Right Side Text */}
            <div className="w-1/2 pl-10">
              <h2 className="text-2xl font-semibold text-primary">
                {activity.title}
              </h2>
              <p className="text-gray-700 mt-3 leading-relaxed">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
