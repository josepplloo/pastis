import Link from "next/link";
import { FlyoutMenu } from "./FlyoutMenu";
import MobileMenu from "./MobileMenu";
import AuthLink from "./AuthLink";
import { LayoutProvider } from "./Context/Provider";
import { Avatar } from "../Avatar";
import { mainMenu } from "@/app/_utils/constants";
import { LanguageList } from "../LanguageList";

type Props = {
  children: React.ReactNode
};

export default function Header({ children }: Props) {
  return (
    <header className="sticky top-0 z-20 bg-white">
      {children}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/?" className="-m-1.5 p-1.5">
            <span className="sr-only">me</span>
            <Avatar
              id="me.svg"
              alt="A portrait of me"
              styles={{ width: "52%" }}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <FlyoutMenu />
          {mainMenu.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.id}
            </Link>
          ))}
        </div>
        <div className="flex w-32 justify-between">
          <AuthLink />
          <LayoutProvider>
            <LanguageList />
            <MobileMenu />
          </LayoutProvider>
        </div>
      </nav>
    </header>
  );
}
