import CardSpotlight from "./card-spotlight";
import whiteLine from "../../public/whiteline.png";
import PropTypes from "prop-types"

export function CardSpotlightDemo({date,round,time,day,content}) {
  return (
    <CardSpotlight className="h-[450px] w-[446px] rounded-xl px-12 py-[50px]">
      <div className="text-neutral-200 relative z-20">
        <div className="h-[86px] flex-col justify-start items-start gap-5 flex mb-[57px]">
          <div className="self-stretch text-start text-white text-[32px] font-['Helvetica Rounded']">
            {date}
          </div>
          <div className="self-stretch text-white text-2xl font-['Helvetica Rounded'] pb-4">
            {round}
            <div className="py-5">
              <img src={whiteLine} />
            </div>
          </div>
        </div>
        <ul className="list-none  mt-1">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              🕛
            </div>
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              {time}
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex mt-5">
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              📍
            </div>
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              Venue: Manekshaw Hall
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex mt-5">
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              🗓️
            </div>
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              {day}
            </div>
          </div>
        </ul>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-[72px]">
          {content}
        </p>
      </div>
    </CardSpotlight>
  );
}

CardSpotlightDemo.propTypes = {
  date : PropTypes.string,
  round: PropTypes.string,
  time: PropTypes.string,
  day: PropTypes.string,
  content: PropTypes.string
}
