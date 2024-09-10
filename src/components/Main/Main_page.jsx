import { useEffect, useRef } from "react";
import backgroundImage from "../../../public/GroupMain.png";
import amazonLogo from "../../../public/amazon.png";
import cocaColaLogo from "../../../public/coca-cola.png";
import olaLogo from "../../../public/ola.png";
import uberLogo from "../../../public/uber.png";
import facebookLogo from "../../../public/fb.png";
import cadburyLogo from "../../../public/cadbury.png";
import Unnati from "../../../public/UNNATI.png";
import { gsap } from "gsap";

const items = [
  { img: amazonLogo, parallaxSpeed: 0.08 },
  { img: cocaColaLogo, parallaxSpeed: 0.03 },
  { img: uberLogo, parallaxSpeed: 0.07 },
  { img: olaLogo, parallaxSpeed: 0.04 },
  { img: facebookLogo, parallaxSpeed: 0.09 },
  { img: cadburyLogo, parallaxSpeed: 0.1 },
];

const itemPositions = [
  { top: "5%", left: "20%" },
  { top: "40%", left: "5%" },
  { top: "36%", left: "90%" },
  { top: "75%", left: "70%" },
  { top: "74%", left: "20%" },
  { top: "-5%", left: "65%" },
];

const Main_page = () => {
  // Function to handle scrolling to the Timeline section
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById("timeline-section"); // ID of the target section
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  // Function to handle scrolling to the Prizes section
  const scrollToPrizes = () => {
    const timelineSection = document.getElementById("prizes-section"); // ID of the target section
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  const galleryRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      gallery.querySelectorAll(".floating-logo").forEach((item, index) => {
        const animationFactor = items[index].parallaxSpeed;
        const newX = (e.clientX - window.innerWidth / 2) * animationFactor;
        const newY = (e.clientY - window.innerHeight / 2) * animationFactor;
        gsap.to(item, { x: newX, y: newY, duration: 0.75 });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
//gjgjgjgjgj
  return (
    <div
      className="w-[100%] h-[640px] flex flex-col items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: "contain", // Ensure it covers the entire div
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat" // Center the background
      }}
    >
      <div className="text-8xl font-thin tracking-wider mb-4">
        <span className="text-blue-400">
          <img src={Unnati} />
        </span>
      </div>
      <div className="text-white font-thin text-3xl mb-4">EDITION 4.0</div>
      <div className="text-xl font-bold mb-8">
        Thrive in Chaos, Lead The Game
      </div>
      <div className="flex space-x-4">
        <button className="bg-white text-black px-6 py-2 rounded-full flex items-center"
        onClick={scrollToTimeline} // Add click handler here
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="bg-transparent border border-white px-6 py-2 rounded-full flex items-center"
        onClick={scrollToPrizes} // Add click handler here
        >
          View Prizes
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div ref={galleryRef} className="absolute inset-0 pointer-events-none">
        {items.map((item, index) => (
          <div
            key={index}
            className="floating-logo absolute"
            style={{
              top: itemPositions[index].top,
              left: itemPositions[index].left,
            }}
          >
            <img
              src={item.img}
              alt={`Logo ${index}`}
              className="w-16 h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main_page;
