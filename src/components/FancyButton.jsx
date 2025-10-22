"use client";
import React, { useState } from "react";
import clsx from "clsx";

const FancyButton = ({
  children,
  className,
  bgColor = "bg-black",
  staticBgColor = "bg-transparent",
  variant = "default", // ✅ new prop
  border = false,
  ...props
}) => {
  const [active, setActive] = useState(false);

  return (
    <button
      {...props}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      onPointerDown={() => setActive(true)}
      onPointerUp={() => setActive(false)}
      className={clsx(
        "fancy-btn group select-none relative flex items-center justify-center rounded-2xl overflow-hidden transition-colors duration-300 ease-in-out px-4 py-2",
        className,
        {
          "border border-black/40 text-white": border && variant === "default", // ✅ Dark base styles
          "border border-white/40 text-white": border && variant === "dark", // ✅ Dark base styles
        },
        staticBgColor,
      )}
    >
      {/* Expanding background */}
      <span
        className={clsx(
          "absolute inset-0 scale-0 rounded-2xl transition-transform duration-500 origin-center",
          variant === "dark" ? "bg-white/10" : bgColor, // ✅ Different fill
          active && "scale-100",
        )}
      />

      {/* Content (icon, text, or both) */}
      <span
        className={clsx(
          "relative z-10 flex items-center gap-2 transition-all duration-500 ease-in-out",
          variant === "dark" ? "text-gray-200" : "text-black",
          active && "scale-110",
          active && (variant === "dark" ? "text-white" : "text-white"),
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default FancyButton;
