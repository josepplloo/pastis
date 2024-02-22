"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import FlyoutMenu from "./FlyoutMenu";
import { aboutMenu } from "@/app/_utils/constants";
import AuthLink from "./AuthLink";

const mainMenu = ["Gallery", "Features", "Documentation"];

export const Avatar = ({ id, alt }: { id: string; alt: string }) => {
  return <Image src={`/_images/${id}`} alt={alt} width="46" height="46" />;
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
          <NavLink href={item.link}>
            <a
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuOpen = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">me</span>
            <Avatar id="me.svg" alt="A portrait of me" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <FlyoutMenu />
          {mainMenu.map((item) => (
            <NavLink href="#">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item}
              </a>
            </NavLink>
          ))}
        </div>
        {/* <AuthLink /> */}
      </nav>
      {/* {<!-- Mobile menu, show/hide based on menu open state. -->} */}
      <div
        className={`${!mobileMenuOpen && "hidden"} lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink href="#">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Avatar id="me.svg" alt="A portrait of me" />
              </a>
            </NavLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={handleMenuOpen}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Dialog />
                {mainMenu.map((item) => (
                  <NavLink href="#">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item}
                    </a>
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                {/* <AuthLink /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
