import { CardRuleBook } from "../../ui/card-rulebook";

const card2 = () => {
  return (
    <div className="relative bg-transparent w-[440px] h-[550px] rounded-xl">
      <div
        className="rulebookGradient w-[120px] xs:h-[300px] lg:h-[605px] rotate-[-105.74deg] rounded-[645px] opacity-[0.5] blur-[95px] absolute right-32 top-48"
        style={{
          background: "linear-gradient(137deg, #487BFF 43.2%, #FFF 77.67%)",
        }}
      ></div>
      <CardRuleBook />
    </div>
  );
};

export default card2;
