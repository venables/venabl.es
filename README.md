<img src="./public/apple-touch-icon.png" align="right" />

# StartKit

> A sane starting point for Next.js projects.

## Features

- [Next.js 13.2](https://nextjs.org) with the `/app` directory
- [Typescript](https://www.typescriptlang.org/) for a rock-solid codebase
- [Prisma](https://prisma.io) database ORM, ready for use with [PlanetScale](https://planetscale).
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for readable, safe code.
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS.
- The beautiful [Inter](https://rsms.me/inter/) typeface.
- [Next Metadata API](https://beta.nextjs.org/docs/api-reference/metadata) for SEO handling.
- [Jest](https://jestjs.io/) testing, optimized for Next.js
- Dark Mode support (without bypassing Server Components).
- Sane VSCode settings and recommended extensions

## Starting a new project with StartKit

1. Clone this repo to your desired path:

   ```sh
   git clone git@github.com:startkit-dev/startkit-next.git my-new-project
   ```

2. Rename the project:

   ```sh
   ./bin/rename
   ```

3. Update your git remote to point to StartKit as `upstream`

   ```sh
   git remote rename origin upstream
   ```

   In the future, you'll be able to pull in the latest StartKit changes without
   missing a beat by running:

   ```sh
   git fetch upstream
   git pull upstream/main
   ```

## Getting Started

To get started simply run the following command.

```sh
pnpm run setup
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
pnpm prisma db push
```

### Browsing the database

Prisma offers a simple UI for inspecting the database. To launch it, run:

```sh
pnpm prisma studio
```

## Running the server

```bash
pnpm dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

## Linting / Checking the codebase

To run a full check of the codebase (type-check, lint, prettier check, test), run:

```sh
pnpm check
```

### Linting

```sh
pnpm lint
```

### Type Checking

```sh
pnpm type-check
```

### Formatting with Prettier

```sh
pnpm format
```

to check for format errors, run:

```sh
pnpm format:check
```

### Testing via Jest

```sh
pnpm test
```

## ❤️ Open Source

This project is free to use and modify for your own projects, free of charge.

It was created by [Blendist](https://blendist.com) and [Matt Venables](https://venabl.es). Pieces were also inspired by, or adapted from [Taxonomy](https://github.com/shadcn/taxonomy) by [shadcn](https://github.com/shadcn).  See the `licenses` directory for all relevant licenses.
