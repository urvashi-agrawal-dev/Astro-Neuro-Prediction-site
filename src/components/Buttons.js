import React from 'react';

const Buttons = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4">
      <button className="py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
        Free Kundli
      </button>
      <button className="py-2 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
        Kundli Matching
      </button>
      <button className="py-2 px-6 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300">
        Horoscopes
      </button>
      <button className="py-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300">
        Eng
      </button>
      <button className="py-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">
        हिंदी
      </button>
      <button className="py-2 px-6 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-300">
        ಕನ್ನಡ
      </button>
      <button className="py-2 px-6 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-300">
        Chat with Astrologer
      </button>
      <button className="py-2 px-6 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition duration-300">
        Talk to Astrologer
      </button>
    </div>
  );
};

export default Buttons;
