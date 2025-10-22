import Card from "@/components/Card";

const SectionThree = () => {
  return (
    <>
      <div className=" bg-white" id="specs">
        <div className="py-24">
          <p className="text-center text-5xl text-black font-normal">
            Smart Camera With
          </p>
          <p className="text-center text-5xl text-black font-normal">
            Long Range
          </p>
        </div>
        <div className="flex flex-row gap-8 overflow-x-scroll p-4">
          <Card img="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg" />
          <Card img="https://images.pexels.com/photos/1170064/pexels-photo-1170064.jpeg" />
          <Card img="https://images.pexels.com/photos/2044044/pexels-photo-2044044.jpeg" />
          <Card img="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg" />
        </div>
      </div>
    </>
  );
};

export default SectionThree;
