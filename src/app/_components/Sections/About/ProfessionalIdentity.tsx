import React from "react";
import { api } from "@/trpc/server";
import { type LocaleKeys } from "i18n-config";


export default async function ProfessionalIdentity({ lang }: { lang: LocaleKeys }) {
  const {content, title, subtitle} = await api.post.aboutMe.query({lang});
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
    >
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h5 className="text-5m font-extrabold tracking-tight sm:text-[2rem]">
          {title}
        </h5>
        <h4 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
          {subtitle}
        </h4>
        <p className="text-lg">
          {content}
        </p>
      </div>
    </section>
  );
}
