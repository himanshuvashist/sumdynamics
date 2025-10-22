const SectionFour = () => {
  return (
    <>
      <div className="bg-white" id="comingsoon">
        <div className="py-24">
          <p className="text-center text-5xl text-black font-normal">
            Drone 2.0
          </p>
        </div>
        <div>
          <div className="flex flex-col h-[70svh] bg-white">
            <div className="flex-1 bg-amber-200 mx-2 rounded-md m-4 relative overflow-hidden ">
              <img
                src="https://images.pexels.com/photos/1170064/pexels-photo-1170064.jpeg"
                className="h-full w-full object-cover blur-xs "
              />

              <div className="h-full bottom-0  bg-black-50  left-0 right-0 pixelated"></div>

              <div className="h-1/3 bottom-0   absolute left-0 right-0 progressive-blur"></div>
              <div className="h-1/4 bottom-0 bg-gray-50 absolute left-0 right-0 bg-transparent flex items-center flex-col">
                <p className="text-4xl text-center font-normal">Coming Soon</p>
                <br />
                <p className="text-center text-md font-normal font-cabinet">
                  with advance antenna, more range and much more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
