import FancyButton from "@/components/FancyButton";
import clsx from "clsx";
import { useState } from "react";
import { useModal } from "@/components/ModalProvider";

const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

export const ModalExample = ({ close }) => {
  return (
    <>
      <h1 className="text-black text-4xl font-cabinet">
        Extreme heat tolerant and dust proof
      </h1>
      <p className="text-gray-600 text-md font-cabinet">
        Only this layer is interactive and scrollable.
      </p>
      <div>
        <p className="text-gray-600 text-2xl md:text-4xl pt-16 font-cabinet">
          {`Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham.`}
        </p>
      </div>
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};
const Parts = ({ h = "", back = false }) => {
  const { open } = useModal();
  return (
    <>
      <div className="flex gap-4 flex-col lg:flex-row">
        <div
          className={clsx("hidden flex-1 lg:block", {
            "lg:order-1": !back,
            "lg:order-3": back,
          })}
        >
          <p
            className={clsx(
              "lg:text-5xl text-gray-400 font-normal text-center p-4",
              {
                "lg:text-right": !back,
                "lg:text-left": back,
              },
            )}
          >
            {h}
          </p>
        </div>
        <div className="order-2 flex-1 relative rounded-lg overflow-hidden group">
          <img
            src="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg"
            className="h-64 w-full lg:h-72 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute left-0 right-0 top-0 bottom-o h-full w-full bg-black/30 flex items-center justify-center">
            <p className="text-white text-md font-semibold">
              Thanos one
              <sup className="text-xs -top-[1em] relative">tm</sup>
            </p>
          </div>
        </div>
        <div
          className={clsx("order-1 flex-1 self-center", {
            "lg:order-3": !back,
            "lg:order-1": back,
          })}
        >
          <div className="pt-4 ">
            <p className="text-black text-center text-dm font-semibold">
              Latest Swamp technology
            </p>
            <p className="text-gray-500 text-md text-center font-cabinet">
              <br />
              with intigrated cirbuit and long duration flight time and
              2000meter radar system. with intigrated cirbuit and long duration
              flight time and 2000meter radar system.
              <br />
              <br />
            </p>
            <div className="flex items-center justify-center">
              <FancyButton
                className="text-black"
                onClick={() =>
                  open({
                    Component: ModalExample,
                  })
                }
              >
                <p className="text-3xl">+</p>
              </FancyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const SectionTwo = ({ switchModal }) => {
  return (
    <>
      <section
        className=" px-8 py-24 bg-white flex items-center justify-center"
        id="tech"
      >
        <div>
          <div>
            <img
              src={`${prefix}/sectionTwoText.svg`}
              alt="icon"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <div className="px-4 pb-4 bg-white">
        <div className="flex flex-col gap-14 lg:gap-18">
          <Parts h={"HEAVY DUTY METAL"} />
          <Parts h={"ALWAYS ON RADAR"} back />
          <Parts h={"LONG RANGE"} />
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
