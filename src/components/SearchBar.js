import React, { useState, useEffect } from "react";
import { Paperclip, Plus, ArrowUp, DatabaseZap, Globe } from "lucide-react";

const SearchBar = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);

  const searchQueries = [
    "Match portfolio with DevOps engineer requirements",
    "Find tech companies hiring React developers",
    "Generate personalized cold email for UI/UX position"
  ];

  const typingSpeed = 100;
  const pauseBetweenQueries = 1500;

  useEffect(() => {
    let currentText = "";
    let timeoutId;
    let isDeleting = false;

    const animateText = () => {
      const currentQuery = searchQueries[currentQueryIndex];

      if (!isDeleting) {
        if (currentText.length < currentQuery.length) {
          currentText = currentQuery.slice(0, currentText.length + 1);
          setDisplayedText(currentText);
          timeoutId = setTimeout(animateText, typingSpeed);
        } else {
          isDeleting = true;
          timeoutId = setTimeout(animateText, pauseBetweenQueries);
        }
      } else {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1);
          setDisplayedText(currentText);
          timeoutId = setTimeout(animateText, typingSpeed / 2);
        } else {
          isDeleting = false;
          setCurrentQueryIndex((prev) => (prev + 1) % searchQueries.length);
          timeoutId = setTimeout(animateText, typingSpeed);
        }
      }
    };

    timeoutId = setTimeout(animateText, typingSpeed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentQueryIndex]);

  return (
    <main className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      
      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-500 mb-4 sm:mb-8 px-4">
            Ship Faster with
            <span className="text-black block sm:inline"> OutReach</span>
          </h1>
          
          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-8 sm:mb-12 px-4">
            Generate personalized emails, connect with potential clients, and scale your outreach efforts using AI-powered tools.
          </p>

          {/* Search Bar Integration */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
            <div className="flex flex-col sm:flex-row items-start border rounded-lg shadow-lg p-3 sm:p-4 bg-gray-50">
              {/* Desktop Icons */}
              <div className="hidden sm:flex items-center space-x-2 mr-3 flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-gray-200">
                  <Paperclip className="text-gray-500" size={20} />
                </div>
                <div className="flex items-center justify-center w-10 h-10">
                  <DatabaseZap className="text-gray-500" size={20} />
                </div>
                <div className="flex items-center justify-center w-10 h-10">
                  <Globe className="text-gray-500" size={20} />
                </div>
              </div>

              {/* Search Input - Updated for better text wrapping */}
              <div className="w-full overflow-hidden">
                <div className="min-h-[40px] sm:min-h-[44px] flex items-start">
                  <textarea
                    value={displayedText}
                    readOnly
                    className="w-full text-gray-700 bg-transparent focus:outline-none text-base sm:text-lg resize-none overflow-hidden leading-normal h-auto"
                    style={{
                      height: 'auto',
                      minHeight: '40px'
                    }}
                    rows={1}
                  />
                </div>
              </div>

              {/* Mobile Icons Row */}
              <div className="flex sm:hidden items-center justify-between w-full mt-4 px-2">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg border-2 border-gray-200">
                    <Paperclip className="text-gray-500" size={20} />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-200 rounded-lg">
                    <DatabaseZap className="text-gray-500" size={20} />
                  </div>
                  <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-200 rounded-lg">
                    <Globe className="text-gray-500" size={20} />
                  </div>
                </div>

                <div
                  className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                    displayedText.length > 0 ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <ArrowUp 
                    className={`${displayedText.length > 0 ? "text-white" : "text-gray-500"}`} 
                    size={20} 
                  />
                </div>
              </div>

              {/* Desktop Project Button and Arrow */}
              <div className="hidden sm:flex items-center space-x-3 flex-shrink-0">
                <button className="flex items-center border rounded-lg px-4 py-2 bg-white text-gray-500">
                  <Plus className="mr-2" size={16} />
                  <span>Project</span>
                </button>

                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                    displayedText.length > 0 ? "bg-black" : "bg-gray-200"
                  }`}
                >
                  <ArrowUp 
                    className={`${displayedText.length > 0 ? "text-white" : "text-gray-500"}`} 
                    size={20} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white rounded-lg hover:bg-black-700 transition text-base sm:text-lg font-medium">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-base sm:text-lg font-medium">
              View Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SearchBar;