import Image from "next/image";
import Link from "next/link";
import FlyoutMenu from "./FlyoutMenu";
import MobileMenu from "./MobileMenu";
import AuthLink from "./AuthLink";
import { LayoutProvider } from "./Context/Provider";

const mainMenu = ["Gallery", "Features", "Documentation"];

const Avatar = ({ id, alt }: { id: string; alt: string }) => {
  return (
    <Image
      src={`/_images/${id}`}
      alt={alt}
      width="46"
      height="48"
      style={{ width: "52%" }}
    />
  );
};

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="sticky top-0 z-20 bg-white">
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
        <div className="flex w-20 justify-between">
          <AuthLink />
          <LayoutProvider>
            <MobileMenu />
          </LayoutProvider>
        </div>
      </nav>
      {/* {<!-- Mobile menu, show/hide based on menu open state. -->} */}
    </header>
  );
}
