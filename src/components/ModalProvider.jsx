// components/SimpleModalProvider.jsx
"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import FancyButton from "@/components/FancyButton";

const ModalContext = createContext(null);

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used inside SimpleModalProvider");
  return ctx;
}

export function SimpleModalProvider({ children }) {
  const [modal, setModal] = useState(null);
  const portalRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // create portal root
  useEffect(() => {
    const el = document.createElement("div");
    el.id = "__simple-modal-root";
    document.body.appendChild(el);
    portalRef.current = el;
    return () => document.body.removeChild(el);
  }, []);

  // TRUE scroll-lock (position: fixed)
  useEffect(() => {
    if (!modal) return;

    const y = window.scrollY;
    const body = document.body.style;
    const html = document.documentElement.style;

    const prev = {
      position: body.position,
      top: body.top,
      overflow: body.overflow,
      htmlOverflow: html.overflow,
    };

    body.position = "fixed";
    body.top = `-${y}px`;
    body.left = "0";
    body.right = "0";
    body.width = "100%";
    body.overflow = "hidden";
    html.overflow = "hidden";

    return () => {
      body.position = prev.position || "";
      body.top = prev.top || "";
      body.overflow = prev.overflow || "";
      html.overflow = prev.htmlOverflow || "";
      window.scrollTo(0, y);
    };
  }, [modal]);

  const open = useCallback(
    ({ render = null, Component = null, props = {} }) => {
      lastFocusedRef.current = document.activeElement;
      const close = () => setModal(null);
      setModal({ render, Component, props, close });
      return { close };
    },
    [],
  );

  const close = useCallback(() => setModal(null), []);

  // restore focus
  useEffect(() => {
    if (modal) return;
    lastFocusedRef.current?.focus?.();
    lastFocusedRef.current = null;
  }, [modal]);

  const value = { open, close, isModalOpen: !!modal };

  return (
    <ModalContext.Provider value={value}>
      {children}

      {modal &&
        portalRef.current &&
        createPortal(<ModalShell modal={modal} />, portalRef.current)}
    </ModalContext.Provider>
  );
}

/* Shell EXACTLY matching your provided markup */
function ModalShell({ modal }) {
  const { render, Component, props, close } = modal;

  return (
    <div
      onMouseDown={close}
      className="z-30 fixed left-0 w-full h-[100svh] top-0 items-center justify-center bg-gray-500/50 backdrop-blur-xs px-4 pt-4 pb:1 md:px-16 md:pt-12 md:pb-4"
    >
      <div className="bg-white h-full overflow-auto z-50 rounded overscroll-contain shadow-2xl shadow-black/50">
        <div className="p-6 md:p-16">
          <div className="flex flex-row-reverse p-2 md:p-8 text-black">
            <FancyButton onClick={close}>x</FancyButton>
          </div>

          {render ? (
            render({ close, props })
          ) : Component ? (
            <Component {...props} close={close} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
