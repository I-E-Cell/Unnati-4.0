import Page from "../Bento/Page";
import FormContainer from "../FormContainer";
import Main_page from "../Main/Main_page";
import EventCard from "../RoadMap/RoadMap_main";
import RuleBook from "../rulebook/ruleBook";

const Hero = () => {
  return (
    <div className=" w-[100%] h-[97vh]  bg-[#000]  rounded-[40px]">
      <div className="flex flex-col bg-[#000] gap-[150px]">
        <div className="mt-[100px] bg-[#000] mb-[200px]">
          <Main_page/>
        </div>
        
        <div className="flex  justify-center w-[100%] items-center mt-[-150px]">
          <EventCard />
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <RuleBook/>
        </div>
        <div className="inline-flex md:hidden sm:hidden">
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