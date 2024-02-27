"use client";
import Link from "next/link";
import { useState } from "react";
import { aboutMenu } from "@/app/_utils/constants";
import { useDispatch, useSelector } from "./Context/index";
import { actionCreators,  } from "./Context/reducer";

export default function Dialog() {
  // Mobile menu context
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const isMenuOpen = useSelector((state) => state.MENU_OPEN);
  const handleMenuOpen = () => dispatch(actionCreators.toggleMenu(!isMenuOpen));
  // internal state
  const [dialogMenuOpen, setDialogMenuOpen] = useState(false);
  const handleDialogOpen = () => setDialogMenuOpen(!dialogMenuOpen);

  return (
    <div className="z-10 -mx-3">
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
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
      <div
        className={`${!dialogMenuOpen && "hidden"} space-y-2" id="disclosure-1 mt-2`}
      >
        {aboutMenu.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            onClick={handleMenuOpen}
            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
