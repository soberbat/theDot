import React from "react";

const Marquee = () => {
  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full pointer-events-none lg:pr-28 ">
      <div className="relative flex w-[80%] lg:w-[86%] mt-0 mb-0 ml-auto mr-auto   overflow-hidden text-sm font-medium text-white opacity-60 ">
        <div className="flex justify-around flex-shrink-0 min-w-full gap-1 animate-marquee">
          Annapurna is live explore launching at 15 May on Steam • Annapurna is
          live explore launching at 15 May on Steam • Annapurna is live explore
          launching at 15 May on Steam
        </div>
        <div className="flex justify-around flex-shrink-0 min-w-full gap-1 animate-marquee">
          Annapurna is live explore launching at 15 May on Steam • Annapurna is
          live explore launching at 15 May on Steam • Annapurna is live explore
          launching at 15 May on Steam
        </div>
      </div>
    </div>
  );
};

export default Marquee;
