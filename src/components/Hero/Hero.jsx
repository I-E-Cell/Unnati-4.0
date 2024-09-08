import Page from "../Bento/Page";
import FormContainer from "../FormContainer";
import Main_page from "../Main/Main_page";
import { ParallaxScrollDemo } from "../Moments/moments_scroll";
import EventCard from "../RoadMap/RoadMap_main";
import RuleBook from "../rulebook/ruleBook";

const Hero = () => {
  return (
    <div className="h-[6180px] w-[1201px]">
      <div className="flex flex-col mr-[75px]">
        <div className="mt-[100px] mb-[100px]">
          <Main_page />
        </div>
        <div className="mb-[100px]">
          <ParallaxScrollDemo />
        </div>
        <div className="flex justify-center mb-[200px] mr-10">
          <EventCard />
        </div>
        <div className="w-[90%] flex justify-end mr-10">
          <RuleBook />
        </div>
        <div className="mt-[120px]">
          <FormContainer />
        </div>
        <div className="flex justify-center mt-[200px]">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Hero;
