import bento1 from "../../../public/bento1.png";
import bento2 from "../../../public/bento2.png";
import bento3 from "../../../public/bento3.png";
import bento4 from "../../../public/bento4.png";
import bento5 from "../../../public/bento5.png";
import bento6 from "../../../public/bento6.png";
import bento7 from "../../../public/bento7.png";
import bento8 from "../../../public/bento8.png";
import bento9 from "../../../public/bento9.png";
import bento10 from "../../../public/bento10.png";
import bento11 from "../../../public/bento11.png";

const Bento_main = () => {
  return (
    <div className="h-[571px] w-[643px] p-[13.02px] flex-col justify-end items-end gap-[13.02px] inline-flex overflow-hidden">
    {/* First row: Left to Right */}
    <div className="justify-start items-start gap-[13.02px] inline-flex animate-marquee-left">
      <img className="w-[188.39px] h-[95.39px] relative rounded-2xl" src={bento1} />
      <img className="h-[95.39px] relative rounded-2xl" src={bento2} />
      <img className="h-[95.39px] relative rounded-2xl" src={bento3} />
      {/* Duplicate images for continuous scrolling */}
      <img className="w-[188.39px] h-[95.39px] relative rounded-2xl" src={bento1} />
      <img className="h-[95.39px] relative rounded-2xl" src={bento2} />
      <img className="h-[95.39px] relative rounded-2xl" src={bento3} />
    </div>
  
    {/* Second row: Right to Left */}
    <div className="basis-0 justify-start items-start gap-[13.02px] inline-flex animate-marquee-right">
      <img className="h-[95.39px] relative rounded-2xl" src={bento4} />
      <img className="w-[145.26px] h-[95.39px] relative rounded-2xl" src={bento5} />
      <img className="h-[95.39px] relative rounded-2xl" src={bento6} />
      {/* Duplicate images for continuous scrolling */}
      <img className="h-[95.39px] relative rounded-2xl" src={bento4} />
      <img className="w-[145.26px] h-[95.39px] relative rounded-2xl" src={bento5} />
      <img className="h-[95.39px] relative rounded-2xl" src={bento6} />
    </div>
  
    {/* Third row: Left to Right */}
    <div className="h-[219.72px] justify-start items-start gap-[13.02px] inline-flex animate-marquee-left">
      <img className="h-[219.72px] relative rounded-2xl" src={bento7} />
      <img className="w-[273px] h-[219.72px] relative rounded-2xl" src={bento8} />
      <img className="h-[219.72px] relative rounded-2xl" src={bento9} />
      {/* Duplicate images for continuous scrolling */}
      <img className="h-[219.72px] relative rounded-2xl" src={bento7} />
      <img className="w-[273px] h-[219.72px] relative rounded-2xl" src={bento8} />
      <img className="h-[219.72px] relative rounded-2xl" src={bento9} />
    </div>
  
    {/* Fourth row: Right to Left */}
    <div className="basis-0 justify-start items-start gap-[13.02px] inline-flex animate-marquee-right">
      <img className="h-[95.39px] relative rounded-2xl" src={bento10} />
      <img className="w-[267.74px] h-[95.39px] relative rounded-2xl" src={bento11} />
      {/* Duplicate images for continuous scrolling */}
      <img className="h-[95.39px] relative rounded-2xl" src={bento10} />
      <img className="w-[267.74px] h-[95.39px] relative rounded-2xl" src={bento11} />
    </div>
  </div>
  

  );
};

export default Bento_main;
