"use client";
import { useEffect, useRef, useState } from "react";
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

// Import CustomCursor only on client-side - PRODUCTION WAY
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
}
