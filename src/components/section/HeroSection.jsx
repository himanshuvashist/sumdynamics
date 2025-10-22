import Navbar from "@/components/Navbar";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col h-svh bg-white">
        <div className="flex-1 bg-amber-200 mx-2 rounded-md mb-4 relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="./video.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute bg-white/5 left-0 right-0 top-0 bottom-0"></div>

          <div className="absolute bg-white/30 bottom-0 left-0 right-0 flex flex-col justify-center items-end progressive-blur">
            <img
              src="/heroOverlay.svg"
              alt="icon"
              className="invisible w-full object-bottom backdrop-blur-none blur-none mb-8"
            />
            <hr className="invisible border-t border-black w-full" />
            <div className="invisible flex flex-row justify-between mb-8 mt-4 w-full">
              <div>
                <p className="text-black text-xs md:text-md font-normal">
                  Indian autonomous design propspurs here
                </p>
              </div>
              <div>
                <p className="text-black text-xs md:text-md font-normal">
                  {" "}
                  Scroll down to view more
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center p-4">
            <img
              src="/heroOverlay.svg"
              alt="icon"
              className="h-inherit w-full object-bottom backdrop-blur-none blur-none mb-4"
            />
            <hr className="border-t border-black w-full" />
            <div className="flex flex-row justify-between mb-8 mt-4 w-full">
              <div>
                <p className="text-black text-xs md:text-md font-normal">
                  Indian autonomous design propspurs here
                </p>
              </div>
              <div>
                <p className="text-black text-xs md:text-md font-normal">
                  {" "}
                  Scroll down to view more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
