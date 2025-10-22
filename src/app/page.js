"use client";
import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import Footer from "@/components/footer";
import Foot from "@/components/footer";
import FancyButton from "@/components/FancyButton";
import Card from "@/components/Card";
import { BoltSlashIcon } from "@heroicons/react/16/solid";
import HeroSection from "@/components/section/HeroSection";
import SectionTwo from "@/components/section/SectionTwo";
import SectionThree from "@/components/section/SectionThree";
import SectionFour from "@/components/section/SectionFour";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

// Import CustomCursor only on client-side - PRODUCTION WAY
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Change to false initially

  const switchModal = (s) => {
    setIsModalOpen(s);
  };

  // Stop/Start Locomotive Scroll based on modal state
  useEffect(() => {
    if (!locomotiveScrollRef.current) return;

    if (isModalOpen) {
      console.log("destroying locomotive scroll");
      locomotiveScrollRef.current.destroy();
      locomotiveScrollRef.current = null;
    } else {
      // Reinitialize when modal closes
      if (!locomotiveScrollRef.current && scrollRef.current) {
        locomotiveScrollRef.current = new LocomotiveScroll({
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
      }
    }
  }, [isModalOpen]);

  return (
    <div className="bg-white">
      <div ref={scrollRef}>
        <HeroSection />
        <SectionTwo switchModal={switchModal} />
        <SectionThree />
        <SectionFour />
      </div>
      {isModalOpen && (
        <div className="z-30 fixed left-0 w-full h-[100svh] top-0 items-center justify-center bg-gray-500/50 backdrop-blur-xs px-4 pt-4 pb:1 md:px-16 md:pt-12 md:pb-4 ">
          <div className="bg-white h-full overflow-auto z-50 rounded overscroll-contain shadow-2xl shadow-black/50">
            <div className="p-6 md:p-16">
              <div className="flex flex-row-reverse p-2 md:p-8 text-black">
                <FancyButton onClick={() => switchModal(false)}>x</FancyButton>
              </div>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
