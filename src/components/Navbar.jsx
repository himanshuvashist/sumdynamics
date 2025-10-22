"use client";
import FancyButton from "@/components/FancyButton";
import { useState } from "react";

import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        id="nav"
        className={clsx(
          "transition-all duration-600 ease-in-out font-normal z-10 flex  items-center   fixed bg-white/40 backdrop-blur-2xl  left-0 right-0",
          {
            // "justify-center": isOpen,
            // "justify-between": !isOpen,
            "mx-4 rounded-xl flex-row justify-between p-4 h-18 top-2": !isOpen,
            "flex-col p-11": isOpen,
          },
        )}
      >
        <a href="/" onClick={() => setIsOpen(false)}>
          <div className="flex items-center justify-between items-center font-cabinet font-bold">
            <img src="/Logo.svg" alt="icon" className="h-[2.5rem] w=[2.5rem]" />
            <p className={clsx("p-3 text-black", { hidden: isOpen })}>
              Sumdynamics
            </p>
          </div>
        </a>

        <FancyButton
          onClick={handleOpen}
          className={clsx("text-black lg:hidden", { hidden: isOpen })}
        >
          =
        </FancyButton>

        <div
          className={clsx("self-end", {
            hidden: !isOpen,
          })}
        >
          <FancyButton onClick={handleClose} className="text-black">
            X
          </FancyButton>
        </div>
        <div
          className={clsx("self-center", {
            hidden: !isOpen,
          })}
        >
          <ul className="flex flex-col gap-8 px-8 py-4 items-center">
            <li>
              <a href="/#tech" onClick={() => setIsOpen(false)}>
                <FancyButton className="text-black" href="#tech">
                  Technology
                </FancyButton>
              </a>
            </li>
            <li>
              <a href="/#specs" onClick={() => setIsOpen(false)}>
                <FancyButton className="text-black">Specs</FancyButton>
              </a>
            </li>
            <li>
              <a href="/#comingsoon" onClick={() => setIsOpen(false)}>
                <FancyButton className="text-black">Coming Soon</FancyButton>
              </a>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <ul className="flex flex-wrap gap-8 items-center">
            <li>
              <a href="/#tech" tabIndex="0" role="button">
                <FancyButton className="text-black " href="#tech">
                  Technology
                </FancyButton>
              </a>
            </li>
            <li>
              <a href="/#specs" tabIndex="0" role="button">
                <FancyButton className="text-black">Specs</FancyButton>
              </a>
            </li>
            <li>
              <a href="/#comingsoon" tabIndex="0" role="button">
                <FancyButton className="text-black">Coming Soon</FancyButton>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
