import Bento_main from "../Bento/Bento_main";
import Main_page from "../Main/Main_page";
import EventCard from "../RoadMap/RoadMap_main";

const Hero = () => {
  return (
    <div className="h-[6180px] w-[1101px]">
      <div className="flex flex-col mr-[75px]">
        <div className="mt-[150px] mb-[200px]">
          <Main_page/>
        </div>
        <div className="flex justify-center">
          <EventCard />
        </div>
        <div className="flex justify-center">
          <Bento_main />
        </div>
      </div>
    </div>
  );
};

export default Hero;
