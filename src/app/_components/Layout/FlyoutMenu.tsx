"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { aboutMenu } from "@/app/_utils/constants";

export default function FlyoutMenu() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => setMenuOpen(!menuOpen);
  const handleClick = (event: MouseEvent) => {
    const isClickOut =
      componentRef.current &&
      !componentRef.current.contains(event.target as Node);
    if (isClickOut && menuOpen) {
      handleMenuOpen();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuOpen]);

  return (
    <div className="relative" ref={componentRef} id="about_button_container">
      <button
        id="about_button"
        type="button"
        className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
        aria-expanded="false"
        onClick={handleMenuOpen}
      >
        About
        <svg
          className={`${menuOpen && "rotate-180"} h-5 w-5 flex-none text-gray-400`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${!menuOpen && "hidden"} absolute -left-8 top-full z-20 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5`}
      >
        <div className="p-4">
          {aboutMenu.map((item) => (
            <div
              key={item.id}
              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                {item.avatar}
              </div>
              <div className="flex-auto">
                <Link
                  href={item.link}
                  onClick={handleMenuOpen}
                  className="block font-semibold text-gray-900"
                >
                  {item.title}
                </Link>
                <p className="mt-1 text-gray-600">{item.lore}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
