"use client";
import React, {useEffect, useState} from "react";

const CustomCursor = () => {
    const [pos, setPos] = useState({x: 0, y: 0});
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const move = (e) => setPos({x: e.clientX, y: e.clientY});
        window.addEventListener("mousemove", move);
        window.addEventListener("pointermove", move); // covers touch + pencil

        const fancyButtons = document.querySelectorAll(".fancy-btn");

        const hide = () => setHidden(true);
        const show = () => setHidden(false);

        fancyButtons.forEach((el) => {
            // hover for mouse
            el.addEventListener("mouseenter", hide);
            el.addEventListener("mouseleave", show);

            // press for touch/pencil/mouse
            el.addEventListener("pointerdown", hide);
            el.addEventListener("pointerup", show);
        });

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("pointermove", move);
            fancyButtons.forEach((el) => {
                el.removeEventListener("mouseenter", hide);
                el.removeEventListener("mouseleave", show);
                el.removeEventListener("pointerdown", hide);
                el.removeEventListener("pointerup", show);
            });
        };
    }, []);

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
