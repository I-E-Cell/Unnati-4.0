// import React from "react";
import { NavLink } from "react-router-dom";
import RegisterNowBG from "../../assets/RegisterNowBG.png";
import RulebookDownload from "../../assets/Unnati_image.png";

const DownloadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const SideBar = () => {
  return (
    <div className="w-[100%] h-[97vh] mt-[16px] flex flex-col justify-between gap-4">
      <div
        className="relative h-[35%] pl-[59.71px] pr-[59.72px] pt-[237px] pb-[26px] bg-black rounded-2xl justify-center items-center inline-flex"
        style={{
          backgroundImage: `url(${RegisterNowBG})`, // Set background image
          backgroundSize: "cover", // Ensure it covers the entire div
          backgroundPosition: "center", // Center the background
        }}
      >
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
          <div className="space-y-4">
            <NavLink to='/form' className="flex items-center justify-between w-[75%] bg-white backdrop-blur-md rounded-full py-3 px-6 text-black m-auto">
              <span>Register Now</span>
              <DownloadIcon />
            </NavLink>
          </div>
        </div>
      </div>
      <div
        className=" relative h-[80%] pl-[59.71px] pr-[59.72px] pt-[237px] pb-[26px] bg-black rounded-2xl justify-center items-center inline-flex"
        style={{
          backgroundImage: `url(${RulebookDownload})`, // Set background image
          backgroundSize: "cover", // Ensure it covers the entire div
          backgroundPosition: "center", // Center the background
        }}
      >
        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
          <div className="space-y-4">
            {/* Anchor tag for redirection */}
            <a
              href="https://drive.google.com/file/d/1UcT-Tnu7cgi7K6hwg6_UohH36uIBLwJV/view?usp=drive_link" // Replace with your actual link
              target="_blank"
              rel="noopener noreferrer" // Security for external links
              className="flex items-center justify-between w-[100%] bg-white backdrop-blur-md rounded-full py-3 px-6 text-black m-auto"
            >
              <span>Download Rulebook</span>
              <DownloadIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
