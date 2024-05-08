import React from "react";

const listOfKnowledge = [
  {
    id: 1,
    description:
      "Programming languages: Javascript, TypeScript, HTML, CSS, and Python.",
  },
  {
    id: 2,
    description:
      "Tools, libraries and frameworks: React.js, SASS, Webpack, Jest, React testing library, Storybook, Node.js, Express.js, ApolloGraphQL, Docker, Git, styled-components, Material UI, Figma, Zeppelin, Hasura, Ant Design, react-JSON schema-form, react-hook-form, Redux, Atlassian, Jira, Confluence, Traefik, Bash, Three.js, LaTeX, Sphinx documentation, ATLAS, CVAT, Git, Github, Gitlab, CI/CD, Scrum, tech Stacks, ITIL, CRISP-DM.",
  },
  {
    id: 3,
    description: "Knowledge of API RESTful services, SOAP, and WebSockets.",
  },
  {
    id: 4,
    description:
      "Knowledge of software-engineering components: operating systems, relational and nonrelational databases, cache databases, and messaging queues.",
  },
  {
    id: 5,
    description:
      "Soft skills: open software advocate, mentorship and continual learner, individual contributor, adaptability, data analysis, and trilingual in Spanish, English and French",
  },
];

export default function Knowledge() {
  return (
    <section
      id="knowledge"
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#02066d] to-[#090c35] text-white"
    >
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h4 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Knowledge
        </h4>
        <ul className="text-justify text-lg">
          {listOfKnowledge.map((item) => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
