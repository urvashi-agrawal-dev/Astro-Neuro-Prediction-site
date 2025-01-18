import React from "react";

const Flow = () => {
  const cards = [
    {
      title: "Personalized Kundli Matching",
      image: "https://slybu.com/wp-content/uploads/astrology-and-numerology.jpg", // Replace with actual path
    },
    {
      title: "Gemstone Suggestions",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkCX2j1niThBHCsjPrMJTK3qegqhmyye6xQ&s", // Replace with actual path
    },
    {
      title: "Rituals",
      image: "https://images.ctfassets.net/cto6k7l91cv5/6sb2cxWciCvcbY12DpU8eC/95d59b3f79bf3cabc567da2ca50b63e7/name-numerology-destiny-soul-urge-personality-numbers.jpg?w=3840&q=60&fm=webp", // Replace with actual path
    },
  ];

  return (
    <div className="py-12 px-6 md:px-16">
      <h3 className="text-lg font-semibold mt-2" style={{ color: '#784585' }}>
  Services Provided By Us
</h3>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800 group h-[400px]"
          >
            {/* Image with Dark Overlay */}
            <div className="relative w-full h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10"></div> {/* Dark overlay */}
            </div>

            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              {/* Adjusted Text Color */}
              <p className={`text-sm text-gray-300`}>{/* Date/Description can be placed here */}</p>
              <h3
  className="text-lg font-semibold mt-2"
  style={{ color: '#fae9d5' }}
>
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
