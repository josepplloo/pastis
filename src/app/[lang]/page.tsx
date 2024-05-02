/* eslint-disable @typescript-eslint/no-unused-vars */
import { unstable_noStore as noStore } from "next/cache";
import { getServerAuthSession } from "@/server/auth";
import { api } from "@/trpc/server";
import ProfessionalIdentity from "../_components/Sections/About/ProfessionalIdentity";
import Experience from "../_components/Sections/About/Experience";
import Knowledge from "../_components/Sections/About/Knowledge";
import type { LocaleKeys } from "i18n-config";


export default async function Home({
  params: { lang },
}: {
  params: { lang: LocaleKeys }
}) {
  noStore();
  const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <div>
      <ProfessionalIdentity lang={lang}/>
      <Experience />
      <Knowledge />
    </div>
  );
}
