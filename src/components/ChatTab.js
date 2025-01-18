import React, { useState, useEffect } from "react";
import { CircleUser, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChatTab = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Quickly create personalized cold emails using AI, tailored to job postings and client needs. Save time and improve client outreach";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-3xl px-8 py-16 flex flex-col items-center justify-center">
        <header className="mb-8 text-center">
          <h1 className="text-6xl font-bold">OutReach</h1>
        </header>
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-normal tracking-tight leading-tight">
            Your Mails,
            <br />
            amplified
          </h2>

          <div className="text-center text-lg font-semibold text-gray-400 mt-10">
            {displayedText}
            <span className="blinking-cursor">|</span>
          </div>
        </div>
        <div className="mt-10 p-6 bg-gray-50 border border-gray-100 rounded-lg inline-block">
          <div className="flex flex-col items-center gap-4">
            <button
              className="w-32 rounded-full border border-gray-300 py-2 px-4 text-gray-700 hover:bg-gray-100"
              onClick={() => navigate("/aichat")}
            >
              Chat
            </button>
            <button className="w-32 rounded-full bg-black text-white hover:bg-black/90 py-2 px-4 flex items-center justify-center">
              <ArrowUp className="mr-2 h-4 w-4" />
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatTab;
