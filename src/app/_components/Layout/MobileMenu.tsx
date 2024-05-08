"use client";
import Image from "next/image";
import Link from "next/link";
import Dialog from "./Dialog";
import { useDispatch, useSelector } from "./Context/index";
import { actionCreators } from "./Context/reducer";
import { type LocaleKeys } from "i18n-config"; 
import { useEffect, useState } from "react";
import { fetchMenu } from "./actions";

export const Avatar = ({ id, alt }: { id: string; alt: string }) => {
  return <Image src={`/_images/${id}`} alt={alt} width="46" height="46" />;
};

type MenuData = {
  id: string;
  path: string;
}[];

export function MobileMainMenu() {
  const dispatch = useDispatch();
  
  const [menuData, setMenuData] = useState<MenuData>([])

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const isMenuOpen = useSelector((state) => state.MENU_OPEN);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const lang:LocaleKeys = useSelector((state) => state.lang);

  const handleMenuOpen = () => dispatch(actionCreators.toggleMenu(!isMenuOpen));

  useEffect(() => {
    fetchMenu(lang)
    .then(menu => setMenuData(menu))
    .catch(() => setMenuData([]));
  },[lang])
  return (
    <div className="z-20 flex">
      <div className="flex lg:hidden">
        <button
          id="nav_hamburger_button"
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={handleMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${!isMenuOpen && "hidden"} lg:hidden`}
        role="dialog"
        aria-modal="true"
      >
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-20"></div>
        <div className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/?" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Avatar id="me.svg" alt="A portrait of me" />
            </Link>
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
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Dialog />
                {menuData.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleMenuOpen}
                  >
                    {item.id}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
