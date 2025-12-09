"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const TARGET_SELECTOR = '.fancy-btn, [data-cursor="merge-cursor"]';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();
  const hiddenRef = useRef(false);
  hiddenRef.current = hidden;

  useEffect(() => {
    // track pointer position (mouse + pointer devices)
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove, { passive: true });

    // Helpers
    const isTarget = (el) =>
      !!(el && el.closest && el.closest(TARGET_SELECTOR));

    // pointerover/pointerout bubble (pointerenter/pointerleave do not bubble)
    const onPointerOver = (e) => {
      if (isTarget(e.target)) setHidden(true);
    };
    const onPointerOut = (e) => {
      // pointerout's relatedTarget can be null; if moving between two target elements, keep hidden
      const to = e.relatedTarget;
      if (!isTarget(to)) setHidden(false);
    };

    // press/release
    const onPointerDown = (e) => {
      if (isTarget(e.target)) setHidden(true);
    };
    const onPointerUp = (e) => {
      // if pointer is still over a target, keep it hidden, otherwise show
      const over = document.elementFromPoint(e.clientX, e.clientY);
      if (!isTarget(over)) setHidden(false);
    };

    // keyboard focus (accessibility)
    const onFocusIn = (e) => {
      if (isTarget(e.target)) setHidden(true);
    };
    const onFocusOut = (e) => {
      if (!isTarget(e.relatedTarget)) setHidden(false);
    };

    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("focusout", onFocusOut);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
  }, []); // keep same dependency you had (optional)

  return (
    <div
      className="z-50 fixed top-0 left-0 rounded-full pointer-events-none
                 backdrop-blur-md border-2 border-white/50 shadow-lg bg-gray-500/40"
      style={{
        width: 30,
        height: 30,
        transform: `translate(${pos.x - 15}px, ${pos.y - 15}px)`,
        opacity: hidden ? 0 : 1, // just fade
        transition: "opacity 0.1s linear", // no movement glitch
      }}
    />
  );
};

export default CustomCursor;
