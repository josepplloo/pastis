# Getting stater

If you want to contribute please fork this repo from [pastis's repo](https://github.com/josepplloo/pastis).
At this moment this have my own content but fell free to reused or check only how the components or the architecture is made it.


In your fork:
- Create a new branch with the name of the [new feature]
> ``git checkout -b"new feature"``
- Create a Pull request to [pastis's project](https://github.com/josepplloo/pastis)

# Installation and Run

### Requirements

One of the following versions of [Node.js](https://nodejs.org/en/download/) must be installed to run **`npm`**:

* `18.x.x` >= `18.17.0`
* `20.5.0` or higher


Make sure you have the latest version of [![npm version](https://img.shields.io/npm/v/npm.svg)](https://npm.im/npm)(//npmjs.com/package/npm)


Install the dependencies:

``npm i``

### Running Prisma Studio

Load the schema:

``npx prisma db push``

After that you will see a message like `🚀  Your database is now in sync with your Prisma schema` and you are ready to run the studio.

``npx prisma studio``

### Going back to the official docs

Follow the [Authentication](https://create.t3.gg/en/usage/first-steps#authentication) steps in the official documentation.

### Running Next.js

`npm run dev`

___

# Contribute to this project
Try not to make changes in more than 6 files per PR unless is a special case.

1. Use the following markdown template
```
## Summary
[Description or list of features]
 - my awesome feature.
 - my awesome feature.

## Screenshot
[something to add or is a self explained image(s)]
[ your screenshot! ]
```

2. Push your changes to your own fork and make a push request to [the main project](https://github.com/josepplloo/pastis/pulls)

---

## Learn More

### Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

### How do I deploy this?
- Follow this tutorial https://vercel.com/guides/nextjs-prisma-postgres 
- Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.