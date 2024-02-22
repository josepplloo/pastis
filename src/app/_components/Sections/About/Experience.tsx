import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h4 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Experience
        </h4>
        <p className="text-lg">
          Finding material for a systematic literature review of Product Line
          Engineering and Data Mining. Maintain DataVar software, build
          pipelines on Pentaho for ITIL projects and deliver Red Hat enterprise
          solutions. Incremental Definition of Product Catalog for a Product
          Line in Guide to industry adoption of software product lines.{" "}
          <a target="_blank" href="https://goo.gl/d29dFt">
            Check here.{" "}
          </a>
        </p>
      </div>
    </section>
  );
}
