<img src="./app/apple-icon.png" align="right" />

# StartKit

> A sane starting point for Next.js projects.

## Features

- [Next.js 13.4](https://nextjs.org) with the `/app` directory and API routes handled by Route Handlers.
- [Typescript](https://www.typescriptlang.org/) for a rock-solid codebase
- [Prisma](https://prisma.io) database ORM, ready for use with [PlanetScale](https://planetscale).
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for readable, safe code.
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS.
- Authentication via [Next Auth](https://next-auth.js.org/).
- Email via [Resend](https://resend.com) and [react email](https://react.email/).
- The beautiful [Inter](https://rsms.me/inter/) typeface.
- [Next Metadata API](https://beta.nextjs.org/docs/api-reference/metadata) for SEO handling, with file-system handlers.
- [Jest](https://jestjs.io/) testing, optimized for Next.js
- Dark Mode support (without bypassing Server Components).
- Sane VSCode settings and recommended extensions

## Starting a new project with StartKit

1. Clone this repo to your desired path:

   ```sh
   git clone git@github.com:startkit-dev/startkit-next.git my-new-project
   ```

2. Initialize the project:

   ```sh
   ./bin/init
   ```

   This will rename `startkit` to your project name throughout the app,
   update your git remote to be named `startkit`, install the `.env` file, and
   install all of your dependencies.

   In the future, you'll be able to pull in the latest StartKit changes without
   missing a beat by running:

   ```sh
   git fetch startkit
   git pull startkit/main
   ```

   Once you run `./bin/init`, it will be safe to delete. You can also delete
   this section of the README.

## Getting Started

To get started simply run the following command.

```sh
npm run setup
```

For Authentication, you should also generate a secret:

```sh
openssl rand -base64 32
```

Place the output value in .env as the `NEXTAUTH_SECRET` value, for example:

```sh
# .env
# ...
NEXTAUTH_SECRET="OgGQPvTtjXu7DvOYKekP8mw9OBJi5FD/ObcYipZFdw0=
```

(NOTE: Do NOT use the value above in your app!)

## Migrating the database

The Prisma adapter is set up to use PlanetScale by default, but any database will work. Simply set `DATABASE_URL` in your `.env` file to work.

If using PlanetScale, we recommend connecting to a `dev` branch of your database.

After making changes to `prisma/schema.prisma`, you can migrate by running:

```sh
npm run prisma db push
```

### Browsing the database

Prisma offers a simple UI for inspecting the database. To launch it, run:

```sh
npm run prisma studio
```

## Running the server

```bash
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

## Linting / Checking the codebase

To run a full check of the codebase (type-check, lint, prettier check, test), run:

```sh
npm run check
```

### Linting

```sh
npm run lint
```

### Type Checking

```sh
npm run type-check
```

### Formatting with Prettier

```sh
npm run format
```

to check for format errors, run:

```sh
npm run format:check
```

### Testing via Jest

```sh
npm run test
```

## ❤️ Open Source

This project is MIT-licensed and is free to use and modify for your own projects.

It was created by [Blendist](https://blendist.com) and [Matt Venables](https://venabl.es).
