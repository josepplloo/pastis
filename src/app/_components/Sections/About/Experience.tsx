import React from "react";

const listOfExperiences = [
  {
    id: 1,
    description:
      "Create, migrate, edit, adapt, integrate, maintain, document, monitor and validate code for websites and web application interfaces.",
  },
  {
    id: 2,
    description:
      "Perform test, analyze data to oversee quality, security, user interface interactions, within others non functional requirements enhancement.",
  },
  {
    id: 3,
    description:
      "Establish and execute protocols for continuous website updates.",
  },
  {
    id: 4,
    description:
      "Potentially engage in website structure and design discussions alongside colleges, designers and stakeholders.",
  },
  {
    id: 5,
    description:
      "Gather and document user requirements, and formulate both logical and physical specifications.",
  },
  {
    id: 6,
    description:
      "Potentially lead and organize small teams in the development of software.",
  },
  {
    id: 7,
    description:
      "Plan, design and coordinate the development, installation, integration and operation of computer-based systems.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white"
    >
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h4 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
          know how ...
        </h4>
        <ul className="list-none text-justify">
          {listOfExperiences.map((item) => (
            <li key={item.id} className="hover:underline">{item.description}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
