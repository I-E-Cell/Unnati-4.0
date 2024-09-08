import { CardSpotlightDemo } from "../../ui/card-spotlight_main";

const EventCard = () => {
  return (
    <div className="min-h-[800px] w-[1071px] p-4 flex flex-col justify-center items-center lg:ml-0 md:ml-[290px]">
      <div className="grid grid-cols-1 gap-[48px] md:grid-cols-1 lg:grid-cols-2">
        {[1, 2].map((index) => (
          <div key={index}>
            <CardSpotlightDemo />
          </div>
        ))}
      </div>

      {/* Third card, centered below the two */}
      <div className="mt-[48px] w-full flex justify-center">
        <CardSpotlightDemo/>
      </div>
    </div>
  );
};

export default EventCard;
