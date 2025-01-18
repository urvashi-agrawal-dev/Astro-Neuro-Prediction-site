import React from "react";

const Flow = () => {
  const cards = [
    {
      title: "Data Collection and Processing",
      date: "Scrape jobs",
      image: "https://myvercell.s3.ap-south-1.amazonaws.com/1.jpg", // Replace with actual path
    },
    {
      title: "personalized cold emails",
      date: "Use Llama",
      image: "https://myvercell.s3.ap-south-1.amazonaws.com/2.jpg", // Replace with actual path
    },
    {
      title: "Monitoring, Analysis",
      date: "Track emails",
      image: "https://myvercell.s3.ap-south-1.amazonaws.com/3.jpg",// Replace with actual path
    },
  ];

  return (
    <div className="py-12 px-6 md:px-16">
      <h2 className="text-black text-2xl font-bold mb-8">For Developers</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 group h-[400px]"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <p className={`text-sm ${index === 1 ? "text-black" : "text-white"}`}>{card.date}</p>
              <h3 className={`text-lg font-semibold mt-2 ${index === 1 ? "text-black" : "text-white"}`}>
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flow;
