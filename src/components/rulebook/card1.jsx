// import React from 'react';
import Rulebook_Cover from '../../assets/Rulebook_cover.png'; // Make sure the path is correct

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Card1 = () => {
  return (
    <div className="relative w-[440px] h-[550px] rounded-xl overflow-hidden">
      <img 
        src={Rulebook_Cover} 
        alt="Card Image" 
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl" 
      />
      <div className="w-full absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-transparent to-transparent">
        <div className="space-y-4">
  
          <button className="flex items-center justify-between w-[70%] bg-white backdrop-blur-md rounded-full py-3 px-6 text-black m-auto">
            <span>Download Rulebook</span>
            <DownloadIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
