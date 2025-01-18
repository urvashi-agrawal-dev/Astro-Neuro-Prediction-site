import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Announcement = () => {
    useEffect(() => {
        const sections = document.querySelectorAll(".animate-section");
        sections.forEach((section) => {
            gsap.fromTo(
                section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <AnnouncementDate date="December 9, 2024" />
                <Title text="Introducing OutReach" />
                <Description text="We’re moving email outreach into the future." />
                <ActionButtons />
                <Details />
            </div>
        </div>
    );
};

const AnnouncementDate = ({ date }) => (
    <p className="text-gray-400 mb-4 animate-section">{date}</p>
);

const Title = ({ text }) => (
    <h1 className="text-5xl font-bold mb-4 animate-section">{text}</h1>
);

const Description = ({ text }) => (
    <p className="text-lg mb-8 animate-section">{text}</p>
);

const ActionButtons = () => (
    <div className="flex justify-center space-x-4 mb-8 animate-section">
        <button className="bg-white text-black py-2 px-4 rounded-full">Learn More</button>
        <button className="text-white py-2 px-4 border border-white rounded-full">
            System Card <i className="fas fa-chevron-right"></i>
        </button>
    </div>
);

const Details = () => (
    <div className="animate-section text-left mx-auto max-w-4xl">
    <p className="text-lg mb-4">
        Our cold email generator is rolling out at [your project's platform]⁠.
    </p>
    <p className="text-lg mb-4">
        Earlier this year, we set out to create OutReach, an intelligent cold email generator designed to revolutionize outreach for software service companies. Using advanced AI tools, OutReach combines automation with personalization, delivering impactful emails tailored to specific job postings. This marks a key step in blending AI with business growth strategies.
    </p>
    <h2 className="text-2xl font-bold mb-4">Turbocharged Features with AI Integration</h2>
    <p className="text-lg mb-4">
        We’ve developed a streamlined, end-to-end system that includes:
    </p>
    <ul className="list-disc list-inside mb-4">
        <li><strong>Llama 3.1:</strong> The backbone of our email generation process, crafting professional and relevant messages.</li>
        <li><strong>ChromaDB:</strong> A vector database that smartly links portfolios to client requirements.</li>
        <li><strong>Streamlit Interface:</strong> A user-friendly interface for controlling the entire process.</li>
        <li><strong>Web Scraping:</strong> Automated extraction of job postings and client information.</li>
    </ul>
    <p className="text-lg">
        Whether you’re generating new emails, managing a database of past projects, or aligning skills with opportunities, OutReach delivers fast, personalized results.
    </p>
</div>
);

export default Announcement;
