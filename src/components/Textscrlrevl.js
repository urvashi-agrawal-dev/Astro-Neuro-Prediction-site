import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Textscrlrevl = () => {
  useEffect(() => {
    // GSAP ScrollTrigger Animations
    gsap.fromTo(
      '.fade-in',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: '.fade-in',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center py-8 md:py-20 px-4 sm:px-6 lg:px-8">
      <p className="fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 leading-snug">
      We provide <span className="font-semibold text-black">AI-powered</span> solution for <span className="font-semibold text-black">software service companies</span> automating personalized <span className="font-semibold text-black">cold emails</span>.
      </p>
      <p className="fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mt-4 leading-snug">
      to streamline <span className="font-semibold text-black">outreach,</span> improve <span className="font-semibold text-black">efficiency,</span> and enhance client <span className="font-semibold text-black">engagement</span>.
      </p>
      <button className="fade-in mt-8 px-6 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition duration-300">
        SEE OUR WORK <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Textscrlrevl;
