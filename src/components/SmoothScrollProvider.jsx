// components/SmoothScrollProvider.jsx
"use client";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useModal } from "@/components/ModalProvider";

export default function SmoothScrollProvider({ children }) {
  const containerRef = useRef(null);
  const locoRef = useRef(null);
  const pathname = usePathname();
  const { isModalOpen } = useModal();

  const init = async () => {
    const el = containerRef.current;
    if (!el) return;
    const mod = await import("locomotive-scroll");
    const LocomotiveScroll = mod.default ?? mod;
    try {
      locoRef.current?.destroy?.();
    } catch {}
    locoRef.current = new LocomotiveScroll({ el, smooth: true });
  };

  const destroy = () => {
    try {
      locoRef.current?.destroy?.();
    } catch {}
    locoRef.current = null;
  };

  // init on mount / route change
  useEffect(() => {
    (async () => {
      destroy();
      await init();
    })();
    return () => destroy();
  }, [pathname]);

  // stop when modal open, restart when closed
  useEffect(() => {
    if (isModalOpen) destroy();
    else init();
  }, [isModalOpen]);

  return (
    <div
      ref={containerRef}
      data-scroll-container
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
