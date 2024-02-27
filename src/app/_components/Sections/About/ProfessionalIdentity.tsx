import React from "react";

export default function ProfessionalIdentity() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
    >
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h5 className="text-5m font-extrabold tracking-tight sm:text-[2rem]">
          About me.
        </h5>
        <h4 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
          Software Engineer
        </h4>
        <p className="text-lg">
          Informatics engineer expert in software engineering, in the tech
          industry for more than ten years working with several contexts and
          domains, focused in how variability and reusability will increase
          productivity, quality and reduce time to market.
        </p>
      </div>
    </section>
  );
}
