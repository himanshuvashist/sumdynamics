"use client";
import {useEffect, useRef, useState} from "react";
import LocomotiveScroll from 'locomotive-scroll';
import Image from "next/image";
import Footer from "@/app/footer";
import Foot from "@/app/footer";

export default function Home() {
    const scrollRef = useRef(null);


    useEffect(() => {
        if (!scrollRef.current) return;
        const locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            lenisOptions: {
                lerp: 0.2,
                duration: 1.3,
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
            <div className="flex flex-col h-svh bg-white">
                <nav id="nav"
                     className="z-10 flex h-16 justify-between items-center rounded-xl mx-4 fixed top-2 bg-white/60 backdrop-blur-md  left-0 right-0
                {/*shadow-[inset_-5px_-5px_5px_0px_rgba(255,255,255,.03),inset_5px_4px_5px_0px_rgba(0,0,0,.04)]*/}
                                 ">
                    <div>
                        <p className="p-3 text-black">LOGO</p>
                    </div>
                    <div>
                        <ul className="flex flex-wrap gap-8 px-8 py-4 items-center">
                            <li><p className="text-black">Technology</p></li>
                            <li><p className="text-black">Specs</p></li>
                            <li><p className="text-black">Coming Soon</p></li>
                            <li><p className="text-black">=</p></li>
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
                    <div
                        className="absolute left-0 bottom-0 flex flex-col bg-black/40 items-center justify-center w-full h-full">
                    </div>
                    <div
                        className="absolute left-0 bottom-0 right-0 flex flex-col  justify-center p-4">
                        <div className="">
                            <h3 className="text-white text-7xl font-bold">Command</h3>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-white text-7xl font-bold">Coordinate</h2>
                        </div>
                        <div className="mt-4">
                            <h1 className="text-white text-9xl font-bold">Dominate</h1>
                        </div>
                        <hr className="border-t border-gray-300"/>
                        <div className="flex flex-row justify-between mb-8 mt-4">
                            <div>
                                <p className="text-white text-lg">Indian autonomous design propspurs here</p>
                            </div>
                            <div>
                                <p className="text-white text-lg"> Scroll down to view more
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-[50svh] px-8 pt-8 bg-white flex items-center justify-center">
                <div>
                    <div>
                        <img src="/sectionTwoText.svg" alt="icon" className="w-full"
                             data-scroll="" data-scroll-speed=".02"
                        />
                    </div>
                    <div className="bg-white pt-4">
                        <p className="text-9xl text-black text-center"
                           data-scroll="" data-scroll-speed=".05"
                        > 2.0 </p>
                    </div>
                </div>
            </div>
            <div className="px-4 pb-4 bg-white flex flex-row">
                <div className="flex gap-8 items-center justify-center flex-col"
                >
                    <div className="flex gap-4 items-stretch">
                        <div className="flex flex-1">
                            <p className="text-7xl text-gray-300">HEAVY DUTY METAL</p>
                        </div>
                        <div className="flex flex-2 rounded-2xl bg-white overflow-hidden"
                             data-scroll="" data-scroll-speed=".01"
                        >
                            <img src="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg"
                                 className="object-cover  w-full h-full"
                            />
                        </div>
                        <div className="flex items-center flex-1"
                             data-scroll="" data-scroll-speed=".06"
                        >
                            <div className="pt-4">
                                <p className="text-black text-md font-bold underline">Latest Swamp
                                    technology</p>
                                <br/>
                                <p className="text-gray-500 text-xl tracking-wider">with intigrated cirbuit and long
                                    duration flight
                                    time and 2000meter radar system.
                                    with intigrated cirbuit and long duration flight
                                    time and 2000meter radar system.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 items-stretch">
                        <div className="flex items-center flex-1"
                        >
                            <div className="pt-4">
                                <p className="text-black text-md font-bold underline">Latest Swamp
                                    technology</p>
                                <br/>
                                <p className="text-gray-500 text-xl tracking-wider">with intigrated cirbuit and long
                                    duration
                                    flight
                                    time and 2000meter radar system.
                                    with intigrated cirbuit and long duration flight
                                    time
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-2 rounded-2xl bg-white overflow-hidden"
                             data-scroll="" data-scroll-speed=".01"
                        >
                            <img src="https://images.pexels.com/photos/1170064/pexels-photo-1170064.jpeg"
                                 className="object-cover  w-full h-full"
                            />
                        </div>
                        <div className="flex flex-1"
                             data-scroll="" data-scroll-speed=".06"
                        >
                            <p className="text-7xl text-gray-300">ALWAYS ON RADAR</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-stretch"
                    >
                        <div className="flex flex-1">
                            <p className="text-7xl text-gray-300">LONG RANGE</p>
                        </div>
                        <div className="flex flex-2 rounded-2xl bg-white overflow-hidden"
                             data-scroll="" data-scroll-speed=".01"
                        >
                            <img src="https://images.pexels.com/photos/2044044/pexels-photo-2044044.jpeg"
                                 className="object-cover  w-full h-full"
                            />
                        </div>
                        <div className="flex items-center flex-1 "
                             data-scroll="" data-scroll-speed=".06"
                        >
                            <div className="pt-4">
                                <p className="text-black text-md font-bold underline">Latest Swamp
                                    technology</p>
                                <br/>
                                <p className="text-gray-500 text-xl tracking-wide">with intigrated cirbuit and long
                                    duration
                                    flight
                                    time and 2000meter radar system.
                                    with intigrated cirbuit and long duration flight
                                    time and 2000meter radar system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="min-h-[100svh] bg-amber-100"><p>hi</p></div>
            <Foot/>
        </div>
    );
}
