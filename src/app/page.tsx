import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import ProfessionalIdentity from "./_components/Sections/About/ProfessionalIdentity";
import Experience from "./_components/Sections/About/Experience";
import Knowledge from "./_components/Sections/About/Knowledge";

export default async function Home() {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div>
      <ProfessionalIdentity />
      <Experience />
      <Knowledge />
    </div>
  );
}
