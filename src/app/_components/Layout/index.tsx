import "@/styles/globals.css";
import Providers from "./Providers";

import { Inter } from "next/font/google";
import Header from "./Header";
import { Maintenance } from "@/app/_components/Maintenance";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "José",
  description: "Professional identity",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className={`font-sans ${inter.variable}`}>
      <Header>
        <Maintenance />
      </Header>
      <Providers>{children}</Providers>
    </body>
  );
}
