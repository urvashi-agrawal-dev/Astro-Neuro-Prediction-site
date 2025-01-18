import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TalksTable = () => {
  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate each table row on scroll
    gsap.fromTo(
      "tbody tr",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: "tbody",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    // Animate the button
    gsap.fromTo(
      "button",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "button",
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Why Open-Source LLMs</h1>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 py-2"></th>
              <th className="border-b-2 border-gray-300 py-2"></th>
              <th className="border-b-2 border-gray-300 py-2"></th>
            </tr>
          </thead>
          <tbody>
          <tr>
      <td className="border-b border-gray-300 py-2 line-through">Feature</td>
      <td className="border-b border-gray-300 py-2 line-through">Open-Source LLMs</td>
      <td className="border-b border-gray-300 py-2 line-through">Proprietary LLMs</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Cost</td>
      <td className="border-b border-gray-300 py-2">free</td>
      <td className="border-b border-gray-300 py-2">pay-per-use</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Security</td>
      <td className="border-b border-gray-300 py-2">Local data hosting possible</td>
      <td className="border-b border-gray-300 py-2">Data processed on external servers</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Availability</td>
      <td className="border-b border-gray-300 py-2">Free licensing</td>
      <td className="border-b border-gray-300 py-2">subscription-based</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Customizability</td>
      <td className="border-b border-gray-300 py-2">High</td>
      <td className="border-b border-gray-300 py-2">Limited</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Performance</td>
      <td className="border-b border-gray-300 py-2">Competitive but varies by model</td>
      <td className="border-b border-gray-300 py-2">Consistently strong and optimized</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Data Transparency</td>
      <td className="border-b border-gray-300 py-2">Open</td>
      <td className="border-b border-gray-300 py-2">Opaque</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Ease of Use</td>
      <td className="border-b border-gray-300 py-2">Requires technical setup</td>
      <td className="border-b border-gray-300 py-2">Easy</td>
    </tr>
    <tr>
      <td className="border-b border-gray-300 py-2">Community Support</td>
      <td className="border-b border-gray-300 py-2">Strong open-source communities</td>
      <td className="border-b border-gray-300 py-2">Company support</td>
    </tr>

  </tbody>
        </table>
        <div className="mt-6">
          <button className="px-4 py-2 bg-black text-white rounded-full flex items-center">
            MORE TALKS <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TalksTable;
