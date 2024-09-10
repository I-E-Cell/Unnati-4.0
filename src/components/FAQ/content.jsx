// import React from 'react';

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 5l7 7-7 7" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

const Content = () => {
  return (
    <>
      <div className="w-[100%]  m-auto flex flex-col items-center justify-start">
        <div className="w-[100%] flex flex-col items-start gap-4">
          {" "}
          {/* Changed to items-start */}
          <h1 className="text-[30px] text-white font-extrabold">
            Frequently Asked Questions
          </h1>
          <p className="font-normal text-[16px] text-white">
            {" "}
            {/* Font size set to 16px */}
            Have questions? Find quick answers to the most common queries about
            Unaati 4.0. If you need more details, feel free to reach out!
          </p>
          <a
            href="https://www.aitecell.in/" // Replace with your URL
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Security feature for external links
            className="flex items-center justify-between lg:w-[55%] w-[40%] bg-white backdrop-blur-md rounded-full py-3 px-6 text-black self-start"
          >
            <span>Visit I&E Cell</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Content;
