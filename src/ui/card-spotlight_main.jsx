import CardSpotlight from "./card-spotlight";

export function CardSpotlightDemo() {
  return (
    <CardSpotlight className="h-[500px] w-[446px] rounded-xl px-12 py-[72px]">
      <div className="h-[86px] flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch text-start text-white text-[32px] font-['Helvetica Rounded']">
          13 September 2024
        </div>
        <div className="self-stretch text-white text-2xl font-['Helvetica Rounded'] pb-4">
          Round 1- Brand Battle
        </div>
      </div>

      <div className="text-neutral-200 mt-7 relative z-20">
        <ul className="list-none  mt-1">
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              🕛
            </div>
            <div className="text-center text-white text-xl font-normal font-['Helvetica Light']">
              Time: 5:00pm
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
              Day: Friday
            </div>
          </div>
        </ul>
        <p className="text-neutral-300 mt-4 relative z-20 text-sm mb-[72px]">
          Lorem ipsum dolor sit amet consectetur. Eget a vitae blandit lacus
          dignissim pellentesque. lacus dignissim pellentesque.
        </p>
      </div>
    </CardSpotlight>
  );
}
