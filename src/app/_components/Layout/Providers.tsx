import { TRPCReactProvider } from "@/trpc/react";
import { LayoutProvider } from "./Context/Provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </TRPCReactProvider>
  );
}
