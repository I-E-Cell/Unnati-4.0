import React from 'react';
import CardSpotlight from "./card-spotlight";

export function CardRuleBook() {
  return (
    <CardSpotlight className="h-[550px] w-[440px] rounded-xl px-8 py-14 text-white hover:text-white">
      <div className=" flex flex-col h-full">
        <h2 className="text-lg z-40 font-bold mb-4">Important Guidelines</h2> 
        <div className="space-y-4 z-40 text-[12px]">
          <p>All the teams should be seated by 17:00 hrs in the Manekshaw Hall.</p>
          <p>All the teams in the hall will be informed about the event flow and how they are going to pitch team-wise.</p>
          <p>The participants are requested to make their own teams of at least 2-3 members. We expect good cooperation from you guys since this is done to promote interaction among you.</p>
          <p>The teams will be divided into batches of two teams, each receiving a company with similar business interests to represent. (Example: Uber and Ola, Boat and JBL, Swiggy and Zomato, etc)</p>
          <p>Each team will be given 20 mins to prepare about the company/startup given to them before presenting on the stage.</p>
          <p>These batches will be called upon the stage to present their cases together (or rather against each other ). The two teams will be performing simultaneously on the stage (in a kinda face-off fashion).</p>
        </div>
      </div>
    </CardSpotlight>
  );
}
