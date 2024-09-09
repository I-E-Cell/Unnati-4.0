import c1 from "../../public/orange_card_flipped.png";
import c2 from "../../public/pink_card_flipped.png";
import c3 from "../../public/blue_card_flipped.png";

const Prizes = () => {
  return (
    <div className=" relative group  justify-center">
      <div className="h-[80vh]  relative">
        <h1 className="text-white/40 left-[50%] top-[65%] translate-y-[-50%] translate-x-[-50%] absolute text-[18em] py-10">
          PRIZES
        </h1>
        <div className="flex flex-row h-full w-[100%] relative z-10 items-center justify-center gap-10">
          <img
            className="w-[12em] opacity-80  flip-card-front ease-in-out transform transition-transform  -rotate-[30deg] duration-500 hover:rotate-y-[180deg] group-hover:rotate-[0deg]"
            src={c2}
            alt=""
          />
          <img
            className="w-[12em] opacity-80 rotate-[30deg] duration-200 group-hover:rotate-[0deg]"
            src={c1}
            alt=""
          />
          <img
            className="w-[12em] -rotate-[30deg] duration-200 group-hover:rotate-[0deg]"
            src={c3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
