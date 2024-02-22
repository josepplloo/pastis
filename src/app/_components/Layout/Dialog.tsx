"use client";
import { useState } from "react";
import { aboutMenu } from "@/app/_utils/constants";
import Link from "next/link";


export default function Dialog() {
  const [dialogMenuOpen, setDialogMenuOpen] = useState(false);
  const handleDialogOpen = () => setDialogMenuOpen(!dialogMenuOpen);

  return (
    <div className="-mx-3">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        aria-controls="disclosure-1"
        aria-expanded="false"
        onClick={handleDialogOpen}
      >
        About
        <svg
          className={`${dialogMenuOpen && "rotate-180"}  h-5 w-5 flex-none`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
      <div
        className={`${dialogMenuOpen && "hidden"} space-y-2" id="disclosure-1 mt-2`}
      >
        {aboutMenu.map((item) => (
            <Link
              href={item.link}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.title}
            </Link>
        ))}
      </div>
    </div>
  );
};
