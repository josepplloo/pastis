import "@/styles/globals.css";
import "./styles.css";
import Layout from "@/app/_components/Layout";
import { i18n, type Locale } from "i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <Layout {...params}>{children}</Layout>
    </html>
  );
}
