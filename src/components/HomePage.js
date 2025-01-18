import React, { useState, useEffect, useRef } from "react";
import { Paperclip, Plus, ArrowUp, DatabaseZap, Globe,CircleCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flow from "./Flow";
import Banner from "./Banner";
import Section from "./Section";
import Tasktable from "./Tasktable";
import Textscrlrevl from "./Textscrlrevl";


gsap.registerPlugin(ScrollTrigger);




const HomePage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
  const textareaRef = useRef(null);
  


  const navigate = useNavigate();


  const searchQueries = [
    "Match portfolio with DevOps engineer requirements",
    "Find tech companies hiring React developers",
    "Generate personalized cold email for UI/UX position",
    "Match portfolio to Python developer roles",
    "Find companies hiring backend engineers",
    "Generate cold email for data scientist position",
    "Personalized email for cloud architect jobs",
    "Suggest past projects for ML engineer",
    "Find startups looking for AI developers",
    "Cold email template for mobile app developers",
    "Match projects to full-stack developer jobs",
    "Find hiring managers for DevOps roles",
    "Generate email for front-end developer opportunity",
    "Showcase portfolio for blockchain developer positions",
    "Find remote jobs for Java developers",
    "Email template for cybersecurity consultant roles",
    "Match React projects with hiring companies",
    "Generate email for senior software engineer",
    "Find companies hiring cloud engineers",
    "Suggest email for game developer job",
    "Match portfolio with startup tech openings",
    "Personalized outreach for embedded systems engineer",
    "Find fintech companies hiring Python developers"
  ];

  const typingSpeed = 100;
  const pauseBetweenQueries = 1500;
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [displayedText]);

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
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4 px-6 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <span className="ml-2 text-xl font-semibold">OutReach</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a className="text-gray-700 hover:text-black transition" href="#">
            Platform
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Case Studies
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Blog
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Docs
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Login
          </a>
          <a className="text-gray-700 hover:text-black transition" href="#">
            Signup
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="border border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition">
            Sign in
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-100 shadow-lg p-4">
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Platform
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Case Studies
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Blog
          </a>
          <a className="block py-2 text-gray-700 hover:text-black" href="#">
            Docs
          </a>
          <div className="mt-4">
            <button className="block w-full border border-gray-700 text-gray-700 px-4 py-2 rounded mb-2 hover:bg-gray-100 transition"
             onClick={() => navigate("/chat")}>
              Sign in
            </button>
          </div>
        </nav>
      )}

<main className="min-h-screen flex flex-col justify-center relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

  <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto w-full text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black mb-4 sm:mb-8 px-4">
      From Data to
      <span 
  className="block sm:inline text-transparent bg-clip-text"
  style={{
    background: "linear-gradient(to right, #ff7eb3, #ff758c, #8b5ff5)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }}
> Deals.
</span>

      </h1>

      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500 mb-8 sm:mb-12 px-4">
        Generate personalized emails, connect with potential clients, and scale your outreach efforts using AI-powered tools.
      </p>

      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4 w-full">
        <div className="flex flex-col sm:flex-row items-center border rounded-lg shadow-lg p-3 sm:p-4 bg-gray-50 w-full">
          {/* Desktop Icons with vertical centering */}
          <div className="hidden sm:flex items-center space-x-2 mr-3 flex-shrink-0 self-center">
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

          {/* Search Input at Top for Mobile */}
          <div className="w-full mb-4 sm:mb-0 flex justify-center">
            <textarea
              ref={textareaRef}
              value={displayedText}
              readOnly
              className="w-full text-gray-700 bg-transparent focus:outline-none text-base sm:text-lg resize-none overflow-hidden min-h-[24px]"
              rows={1}
              style={{ height: 'auto', minHeight: '24px' }}
            />
          </div>

          {/* Mobile Icons Row with increased top margin */}
          <div className="flex sm:hidden items-center justify-between w-full mt-2 px-2">
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

          {/* Desktop Project Button and Arrow with vertical centering */}
          <div className="hidden sm:flex items-center space-x-3 flex-shrink-0 self-center">
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

      <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black text-white rounded-lg hover:bg-black-700 transition text-base sm:text-lg font-medium"
         onClick={() => navigate("/chat")}>
          Get Started Free
        </button>
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition text-base sm:text-lg font-medium"
         onClick={() => navigate("/anc")}> 
          How to use
        </button>
      </div>
    </div>
  </div>
</main>



<Section/>

<Textscrlrevl/>

 <Flow/>

 <Tasktable/>

 <Banner/>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">OutReach</h2>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:text-gray-400 transition">
              Platform
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Blog
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              Docs
            </a>
          </div>

          <div className="mt-6 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-400">
          © 2024 OutReach. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;