import logo from "../../assets/ecell_nav.png";
import Home from "../../assets/home.svg";
import Timeline from "../../assets/timeline.svg";
import Prizes from "../../assets/card_giftcard.svg";
import Rulebook from "../../assets/rulebook.svg";
import Faq from "../../assets/faq.svg";
import Gallery from "../../assets/gallery.svg";
import Video from "../../assets/video.svg";



const Navbar = () => {
  // Function to handle scrolling to the Hero section
  const scrollToHome = () => {
    const timelineSection = document.getElementById("hero-section"); // ID of the target section
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

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

  // Function to handle scrolling to the Rulebook section
  const scrollToRulebook = () => {
    const timelineSection = document.getElementById("rulebook-section"); // ID of the target section
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  // Function to handle scrolling to the FAQ section
  const scrollToFaq = () => {
    const timelineSection = document.getElementById("faq-section"); // ID of the target section
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  // Function to handle scrolling to the Gallery section
  const scrollToGallery = () => {
    const timelineSection = document.getElementById("gallery-section"); // ID of the target section
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  // Function to handle scrolling to the Video section
  const scrollToVideo = () => {
    const timelineSection = document.getElementById("video-section"); // ID of the target section
    if (timelineSection) {
      timelineSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
    }
  };

  return (
    <div>
      <div className="w-[100%] h-[97vh] py-7 bg-[#000] rounded-[28px] mt-[13px] mb-[13px] flex-col justify-between items-center inline-flex">
        <div className="w-[56px] flex flex-col gap-4 justify-center items-center">
          <a
            href="https://www.aitecell.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="rounded-full w-[48px] h-[48px] cursor-pointer"
              style={{
                backgroundImage: `url(${logo})`, // Set background image
                backgroundSize: "cover", // Ensure it covers the entire div
                backgroundPosition: "center", // Center the background
              }}
            ></div>
          </a>
          <div
            className="w-[90.02px] h-[1.006px] opacity-[50%]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          ></div>
          <div className="flex flex-col gap-1">
            <div className="cursor-pointer relative w-[56px] h-[56px] flex justify-center items-center"
            onClick={scrollToHome} // Add click handler here
            >
              <img
                src={Home}
                alt="Home"
                className="inset-0 w-[24px] h-[24px] object-contain z-0"
              />
              {/* border border-[#976f6f42] rounded-xl bg-[rgba(255,255,255,0.03)] */}
              {/* <div
                className="absolute h-[56px] w-[56px]"
                style={{
                  opacity: 0.6,
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #CC8B8B 0%, rgba(163, 59, 59, 0) 100%)",
                  filter: "blur(20px)",
                }}
              ></div> */}
            </div>
            <div className="cursor-pointer w-[56px] h-[56px] flex justify-center items-center"
            onClick={scrollToTimeline} // Add click handler here
            >
              <img
                src={Timeline}
                alt="Timeline"
                className="inset-0 w-[24px] h-[24px] object-contain z-0"
              />
            </div>
            <div className="cursor-pointer w-[56px] h-[56px] flex justify-center items-center"
            onClick={scrollToPrizes} // Add click handler here
            >
              <img
                src={Prizes}
                alt="Prizes"
                className="inset-0 w-[24px] h-[24px] object-contain z-0"
              />
            </div>
            <div className="cursor-pointer w-[56px] h-[56px] flex justify-center items-center"
            onClick={scrollToRulebook} // Add click handler here
            >
              <img
                src={Rulebook}
                alt="Rulebook"
                className="inset-0 w-[24px] h-[24px] object-contain z-0"
              />
            </div>
            <div className="cursor-pointer w-[56px] h-[56px] flex justify-center items-center"
            onClick={scrollToFaq} // Add click handler here
            >
              <img
                src={Faq}
                alt="FAQs"
                className="inset-0 w-[24px] h-[24px] object-contain z-0"
              />
            </div>
            <div className="cursor-pointer w-[56px] h-[56px] flex justify-center items-center"
            onClick={scrollToGallery} // Add click handler here
            >
              <img
                src={Gallery}
                alt="Unnati Moments"
                className="inset-0 w-[24px] h-[24px] object-contain z-0"
              />
            </div>
            <div className="cursor-pointer w-[56px] h-[56px] flex justify-center items-center"
            onClick={scrollToVideo} // Add click handler here
            >
              <img
                src={Video}
                alt="Unnati Moments"
                className="inset-0 w-[24px] h-[24px] object-contain z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
