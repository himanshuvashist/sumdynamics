"use client";

import FancyButton from "@/components/FancyButton";

const Card = ({ img = "" }) => {
  return (
    <>
      <div className="h-72 min-w-[15rem] sm:min-w-[20rem] md:min-w-[25rem] lg:min-w-[28rem] w-4/5 rounded-lg  relative overflow-hidden">
        <img src={img} className="object-cover  w-full h-full" />
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-black/40">
          <div className="p-4 flex flex-col justify-around h-full">
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">LONG RANGE</p>
            </div>

            <div>
              <div className="flex flex-row items-center justify-around w-full">
                <div className="flex-1">
                  <p className="text-white font-bold text-xl font-normal font-cabinet">
                    Go to territory far beyond conventional range.
                  </p>
                </div>
                <div>
                  <FancyButton variant="dark">
                    <p className="text-4xl">+</p>
                  </FancyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
