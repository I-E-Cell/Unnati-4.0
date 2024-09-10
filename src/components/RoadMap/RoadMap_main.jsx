import { CardSpotlightDemo } from "../../ui/card-spotlight_main";

const EventCard = () => {
  return (
    <div className="min-h-[940px] w-[100%] p-4 flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 gap-[48px] md:grid-cols-2 lg:grid-cols-2">
        <div>
          <CardSpotlightDemo
            date={"13 September 2024"}
            day={"Day: Friday"}
            time={"Time: 5:00pm"}
            round={"Round 1- Brand Battle"}
            content={
              "Kickstart the competition with the first set of 40% teams showcasing their innovation"
            }
          />
        </div>
        <div>
          <CardSpotlightDemo
            date={"14 September 2024"}
            day={"Day: Saturday"}
            time={"Time: 2:00pm"}
            round={"Round 1- Brand Battle"}
            content={
              "Catch the next 60% of teams as they present their game-changing ideas"
            }
          />
        </div>
      </div>

      {/* Third card, centered below the two */}
      <div className="mt-[48px] w-full flex justify-center">
        <CardSpotlightDemo
          date={"15 September 2024"}
          day={"Day: Sunday"}
          time={"Time: 2:00pm"}
          round={"Round 2- CEO In Trouble"}
          content={
            'All Selected teams battle it out in the ultimate "CEO In Trouble" challenge - who will rise to the top?'
          }
        />
      </div>
    </div>
  );
};

export default EventCard;
