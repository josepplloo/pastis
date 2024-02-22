import "@/styles/globals.css";
import "./styles.css";
import Layout from "@/app/_components/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>{children}</Layout>
  );
}
