import Page from "../Bento/Page";
import FormContainer from "../FormContainer";
import Main_page from "../Main/Main_page";
import { ParallaxScrollDemo } from "../Moments/moments_scroll";
import EventCard from "../RoadMap/RoadMap_main";
import RuleBook from "../rulebook/ruleBook";

const Hero = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-16 sm:space-y-24 lg:space-y-32">
        <div className="mt-8 sm:mt-16 lg:mt-24">
          <Main_page />
        </div>
        <div className="lg:ml-0 sm:ml-[320px]">
          <ParallaxScrollDemo />
        </div>
        <div className="flex justify-center lg:ml-0 sm:ml-[320px]">
          <EventCard />
        </div>
        <div className="w-full flex justify-end lg:ml-0 md:ml-[300px] sm:ml-[320px]">
          <RuleBook />
        </div>
        <div>
          <FormContainer />
        </div>
        <div className="flex justify-center">
          <Page />
        </div>
      </div>
    </div>
  );
};

export default Hero;