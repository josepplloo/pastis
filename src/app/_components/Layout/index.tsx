import "@/styles/globals.css";
import Providers from "./Providers";

import { Inter } from "next/font/google";
import Header from "./Header";

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
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
