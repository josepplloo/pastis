"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import FlyoutMenu from "./FlyoutMenu";
import { aboutMenu } from "@/app/_utils/constants";
import MobileMenu from "./MobileMenu";

const mainMenu = ["Gallery", "Features", "Documentation"];

export const Avatar = ({ id, alt }: { id: string; alt: string }) => {
  return <Image src={`/_images/${id}`} alt={alt} width="46" height="48" style={{ width: '100%', height: 'auto' }}/>;
};

export const Dialog = () => {
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
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {/* <!-- 'Product' sub-menu, show/hide based on menu state. --> */}
      <div
        className={`${dialogMenuOpen && "hidden"} space-y-2" id="disclosure-1 mt-2`}
      >
        {aboutMenu.map((item) => (
          <NavLink href={item.link}>
            <a
              key={item.id}
              href={item.link}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              {item.title}
            </a>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link href={href} passHref legacyBehavior>
      {children}
    </Link>
  );
};

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">me</span>
            <Avatar id="me.svg" alt="A portrait of me"/>
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <FlyoutMenu />
          {mainMenu.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item}
              </Link>
          ))}
        </div>
        <MobileMenu />
        {/* <AuthLink /> */}
      </nav>
      {/* {<!-- Mobile menu, show/hide based on menu open state. -->} */}
    </header>
  );
}
