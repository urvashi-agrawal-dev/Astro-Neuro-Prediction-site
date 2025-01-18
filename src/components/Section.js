import { CircleCheck } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const elements = featuresRef.current.querySelectorAll(".feature-item");
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      className="py-12 px-6 md:py-20 md:px-8 bg-black"
      ref={featuresRef}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
        Key Features
      </h2>
      <div className="grid gap-8 md:grid-cols-3 sm:text-center text-left">
        <div className="feature-item">
          <div className="flex items-center mb-2 justify-start sm:justify-center">
            <CircleCheck className="text-green-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">
              AI-Powered Emails
            </h3>
          </div>
          <p className="text-gray-400 sm:text-center text-left">
            Generate personalized cold emails using Llama 3.1 and LangChain for efficient outreach.
          </p>
        </div>
        <div className="feature-item">
          <div className="flex items-center mb-2 justify-start sm:justify-center">
            <CircleCheck className="text-green-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">
              Smart Data Integration
            </h3>
          </div>
          <p className="text-gray-400 sm:text-center text-left">
            Leverage ChromaDB to connect job requirements with your portfolio for tailored responses.
          </p>
        </div>
        <div className="feature-item">
          <div className="flex items-center mb-2 justify-start sm:justify-center">
            <CircleCheck className="text-green-400 mr-2" />
            <h3 className="text-xl font-semibold text-white">
              Real-Time Insights
            </h3>
          </div>
          <p className="text-gray-400 sm:text-center text-left">
            Automatically scrape job postings to craft dynamic, targeted emails.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
