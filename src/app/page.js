"use client";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import Footer from "@/app/footer";
import Foot from "@/app/footer";
import FancyButton from "@/app/components/FancyButton";
import Card from "@/app/components/Card";
import CustomCursor from "@/app/components/CustomCursor";
import { BoltSlashIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lenisOptions: {
        duration: 1.6,
        orientation: "vertical",
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      },
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef}>
      <CustomCursor />
      <div className="flex flex-col h-svh bg-white">
        <nav
          id="nav"
          className="z-10 flex h-16 justify-between items-center rounded-xl mx-4 fixed top-2 bg-white/60 backdrop-blur-md  left-0 right-0
                {/*shadow-[inset_-5px_-5px_5px_0px_rgba(255,255,255,.03),inset_5px_4px_5px_0px_rgba(0,0,0,.04)]*/}
                                 "
        >
          <div>
            <p className="p-3 text-black">LOGO</p>
          </div>
          <div>
            <ul className="flex flex-wrap gap-8 px-8 py-4 items-center">
              <li>
                <FancyButton className="text-black ">Technology</FancyButton>
              </li>
              <li>
                <FancyButton className="text-black">Specs</FancyButton>
              </li>
              <li>
                <FancyButton className="text-black">Coming Soon</FancyButton>
              </li>
              <li>
                <FancyButton className="text-black">=</FancyButton>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex-1 bg-amber-200 mx-2 rounded-md m-4 mt-18 relative overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="./video.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
          <div className="absolute left-0 bottom-0 flex flex-col bg-black/60 items-center justify-center w-full h-full"></div>
          <div className="absolute left-0 bottom-0 right-0 flex flex-col  justify-center p-4">
            <div className="">
              <h3 className="text-white text-4xl font-zodiak font-normal">
                COMMAND
              </h3>
            </div>
            <div className="mt-8">
              <h2 className="text-white text-4xl font-zodiak font-normal">
                COORDINATE
              </h2>
            </div>
            <div className="mt-4">
              <h1 className="text-white text-9xl font-zodiak font-normal">
                DOMINATE
              </h1>
            </div>
            <hr className="border-t border-gray-300" />
            <div className="flex flex-row justify-between mb-8 mt-4">
              <div>
                <p className="text-white text-md font-normal">
                  Indian autonomous design propspurs here
                </p>
              </div>
              <div>
                <p className="text-white text-md font-normal">
                  {" "}
                  Scroll down to view more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[50svh] px-8 pt-8 bg-white flex items-center justify-center">
        <div>
          <div>
            <img
              src="/sectionTwoText.svg"
              alt="icon"
              className="w-full"
              data-scroll=""
              data-scroll-speed=".02"
            />
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 bg-white flex flex-row">
        <div className="flex gap-16 items-center justify-center flex-col">
          <div className="flex gap-4 items-stretch">
            <div className="flex flex-1 flex-col">
              <div>
                <p className="text-7xl text-gray-400 font-light tracking-widest text-right">
                  HEAVY DUTY METAL
                </p>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-400">---- ---- ---- ----</p>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-400">---- ---- ---- ----</p>
              </div>
            </div>
            <div
              className=" group flex flex-2 rounded-2xl bg-white overflow-hidden relative group"
              data-scroll=""
              data-scroll-speed=".01"
            >
              <img
                src="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg"
                className="object-cover  w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute left-0 right-0 top-0 bottom-o h-full w-full bg-black/30 flex items-center justify-center">
                <p className="text-white text-3xl font-semibold">
                  Thanos one
                  <sup className="text-sm -top-[1em] relative">tm</sup>
                </p>
              </div>
            </div>
            <div
              className="flex items-center flex-1"
              data-scroll=""
              data-scroll-speed=".06"
            >
              <div className="pt-4">
                <p className="text-black text-md font-bold tracking-wide">
                  Latest Swamp technology
                </p>
                <br />
                <div>
                  <p className="text-gray-500 text-xl tracking-wide">
                    with intigrated cirbuit and long duration flight time and
                    2000meter radar system. with intigrated cirbuit and long
                    duration flight time and 2000meter radar system.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <FancyButton className="text-black">
                    <p className="text-3xl">+</p>
                  </FancyButton>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-stretch">
            <div className="flex items-center flex-1">
              <div className="pt-4">
                <p className="text-black text-md font-bold tracking-wide">
                  Latest Swamp technology 2
                </p>
                <br />
                <div>
                  <p className="text-gray-500 text-xl">
                    with intigrated cirbuit and long duration flight time and
                    2000meter radar system. with intigrated cirbuit and long
                    duration flight time
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <FancyButton className="text-black ">
                    <p className="text-3xl">+</p>
                  </FancyButton>
                </div>
              </div>
            </div>
            <div
              className="group flex flex-2 rounded-2xl bg-white overflow-hidden relative"
              data-scroll=""
              data-scroll-speed=".01"
            >
              <img
                src="https://images.pexels.com/photos/1170064/pexels-photo-1170064.jpeg"
                className="object-cover  w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute left-0 right-0 top-0 bottom-o h-full w-full bg-black/30 flex items-center justify-center">
                <p className="text-white text-3xl font-semibold">
                  Thanos two
                  <sup className="text-sm -top-[1em] relative">tm</sup>
                </p>
              </div>
            </div>
            <div
              className="flex flex-1 flex-col"
              data-scroll=""
              data-scroll-speed=".06"
            >
              <div>
                <p className="text-7xl text-gray-400 font-light tracking-widest">
                  ALWAYS ON RADAR
                </p>
              </div>
              <div className="flex items-center ">
                <p className="text-gray-400">---- ---- ---- ----</p>
              </div>
              <div className="flex items-center ">
                <p className="text-gray-400">---- ---- ---- ----</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-stretch">
            <div className="flex flex-1 flex-col">
              <div>
                <p className="text-7xl text-gray-400 font-light tracking-widest text-right">
                  MORE RANGE
                </p>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-400">---- ---- ---- ----</p>
              </div>
              <div className="flex items-center justify-end">
                <p className="text-gray-400">---- ---- ---- ----</p>
              </div>
            </div>
            <div
              className="group flex flex-2 rounded-2xl bg-white overflow-hidden relative"
              data-scroll=""
              data-scroll-speed=".01"
            >
              <img
                src="https://images.pexels.com/photos/2044044/pexels-photo-2044044.jpeg"
                className="object-cover  w-200 group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute left-0 right-0 top-0 bottom-o h-full w-full bg-black/30 flex items-center justify-center">
                <p className="text-white text-3xl font-semibold">
                  Thanos three
                  <sup className="text-sm -top-[1em] relative">tm</sup>
                </p>
              </div>
            </div>
            <div
              className="flex items-center flex-1 "
              data-scroll=""
              data-scroll-speed=".06"
            >
              <div className="pt-4">
                <p className="text-black text-md font-bold mb-4 tracking-wide">
                  Latest Swamp technology 3
                </p>
                <div>
                  <p className="text-gray-500 text-xl">
                    with intigrated cirbuit and long duration flight time and
                    3meter radar system. with intigrated cirbuit and long
                    duration flight time and 2000meter radar system.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-center">
                  <FancyButton className="text-black">
                    <p className="text-3xl">+</p>
                  </FancyButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Section 3*/}
      <div className="min-h-[100svh] p-8 bg-white">
        <div className="my-16">
          <p className="text-center text-6xl text-black font-semibold">
            Smart Camera
          </p>
          <p className="text-center text-6xl text-black font-semibold">
            With Long Range
          </p>
        </div>
        <div className="flex flex-row gap-8 ">
          <Card img="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg" />
          <Card img="https://images.pexels.com/photos/1170064/pexels-photo-1170064.jpeg" />
          <Card img="https://images.pexels.com/photos/2044044/pexels-photo-2044044.jpeg" />
        </div>
      </div>
      <Foot />
    </div>
  );
}
