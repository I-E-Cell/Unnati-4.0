import c1 from "../../public/blue_card_flipped.png";
import c2 from "../../public/pink_card_flipped.png";
import c3 from "../../public/orange_card_flipped.png";

const Prizes = () => {
  return (
    <div className=" relative group  justify-center">
      <div className=" h-[90vh] md:h-[80vh]  relative">
        <h1 className="hidden md:block font-semibold text-[#181818] left-[50%] top-[75%] translate-y-[-50%] translate-x-[-50%] absolute text-[18em] py-10">
          PRIZES
        </h1>
        <div className="flex flex-col md:flex-row md:h-full md:w-[100%] relative z-10 items-center justify-center gap-10 mt-5 md:mt-1">
          
          <img
            className=" w-[8em] md:w-[12em] opacity-[78%] flip-card-front ease-in-out transform transition-transform  -rotate-[30deg] duration-500 hover:rotate-y-[180deg] group-hover:rotate-[0deg]"
            src={c3}
            alt=""
          />
          <img
            className="w-[8em] md:w-[12em] opacity-[78%] rotate-[30deg] duration-200 group-hover:rotate-[0deg]"
            src={c1}
            alt=""
          />
          <img
            className="w-[8em] md:w-[12em] opacity-[78%] -rotate-[30deg] duration-200 group-hover:rotate-[0deg]"
            src={c2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
