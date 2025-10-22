"use client";
import { useEffect, useState } from "react";
import FancyButton from "@/components/FancyButton";
import Link from "next/link";

function Button(props) {
  return null;
}

const Foot = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newYear = new Date().getFullYear();
      setYear(newYear);
    }
  }, []);

  return (
    <section className="px-8 bg-white">
      <div className="">
        <div className="flex items-center justify-center w-full py-24">
          <FancyButton staticBgColor="bg-gray-200">
            Email Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
              <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
            </svg>
          </FancyButton>
        </div>
        <div className="flex flex-row justify-between m-4">
          <div className="flex-1 items-center justify-start hidden md:flex">
            <p className="text-black text-lg p-4 font-cabinet">
              <img src="/Logo.svg" className="h-8 w-8 inline-block mx-2" />
              sumdynamics.
            </p>
          </div>
          <div className="flex flex-1 flex-row">
            <div className="flex-1 flex justify-center">
              <ul className="inline-block text-right">
                <li className="px-4 mb-6 font-semibold">
                  <p className="text-black">Other Links</p>
                </li>
                <li className="flex justify-end">
                  <Link href="/articles">
                    <FancyButton className="text-black text-sm">
                      Press & Media
                    </FancyButton>
                  </Link>
                </li>
                <br />
                <li className="flex justify-end">
                  <FancyButton className="text-black text-sm">
                    Technology
                  </FancyButton>
                </li>
                <br />
              </ul>
            </div>
            <div className="flex-1 flex justify-center">
              <ul className="inline-block text-right">
                <li className="px-4 mb-6 font-semibold">
                  <p className="text-black">Our Socials</p>
                </li>
                <li className="flex justify-end">
                  <FancyButton className="text-black text-sm">
                    Instagram
                  </FancyButton>
                </li>
                <br />
                <li className="flex justify-end">
                  <FancyButton className="text-black text-sm">Meta</FancyButton>
                </li>
                <br />
                <li className="flex justify-end">
                  <FancyButton className="text-black text-sm">
                    Twitter
                  </FancyButton>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200" />

        <div className="mb-8">
          <p className="text-black text-xs p-4 text-center">
            copyright &copy; {year},
            <img src="/Logo.svg" className="h-4 w-4 inline-block mx-2" />
            <span className="font-cabinet text-md">sumdynamics.</span>
          </p>
          <p className="text-xs ml-4 text-center text-black">Made in 🇮🇳</p>
        </div>
      </div>
    </section>
  );
};

export default Foot;
