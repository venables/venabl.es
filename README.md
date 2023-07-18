<img src="./app/apple-icon.png" align="right" />

# StartKit

> A sane starting point for Next.js projects.

## Features

- [Next.js 13.4](https://nextjs.org) with the `/app` directory and API routes handled by Route Handlers.
- [Typescript](https://www.typescriptlang.org/) for a rock-solid codebase
- [Prisma](https://prisma.io) database ORM, ready for use with [PostgreSQL](https://www.postgresql.org/).
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for readable, safe code.
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS.
- Gorgeous UI built with [Radix](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/).
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
   git clone git@github.com:venables/startkit-next.git my-new-project
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
   git merge startkit/main
   ```

   Once you run `./bin/init`, it will be safe to delete. You can also delete
   this section of the README.

## Getting Started

When you first check out a this project, you should run the following command to get your environment all set up:

```sh
pnpm run setup
```

## Environment variables

Environment variables are stored in `.env` files. By default the `.env` file is included in source control and contains
settings and defaults to get the app running. Any secrets or local overrides of these values should be placed in a
`.env.local` file, which is ignored from source control.

For environment-specific environment variables, you can place the defaults in `.env.development`, and overwrite locally
with `.env.development.local`.

You can [read more about environment variables here](https://nextjs.org/docs/basic-features/environment-variables).

## Running the server

```bash
pnpm dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

## Database

The Prisma adapter is set up to use PostgreSQL by default, but any database will work. Simply set `DATABASE_URL` in your `.env` (or `.env.local`) file to work.

The database `startkit_development` should be created during the `pnpm run setup` step (defined in `./bin/setup`).

Ensure you have postgres running locally. For example, on MacOS with homebrew:

```sh
brew install postgresql@14
brew services start postgresql@14
```

### `pnpm prisma`

This project exposes a package.json script for accessing prisma via `pnpm prisma <command>`. This script handles all environment variable mapping automatically via `dotenv-cli`, so you don't have to think about it. You should always try to use this script when interacting with prisma locally.

### Making changes to the database schema

Make changes to your database by modifying `prisma/schema.prisma` ([learn more](https://www.prisma.io/docs/concepts/components/prisma-schema)).

When prototyping changes, you can run :

```sh
pnpm prisma db push
```

When you feel comfortable with the changes, you can make a migration file by running:

```sh
pnpm prisma migrate dev
```

### Browsing the database

Prisma offers a simple UI for inspecting the database. To launch it, run:

```sh
pnpm prisma studio
```

## UI components

By default, this project includes the following components from [shadcn/ui](https://ui.shadcn.com/):

- [Button](https://ui.shadcn.com/docs/components/button)
- [Toast](https://ui.shadcn.com/docs/components/toast)

To add new UI components from [shadcn/ui](https://ui.shadcn.com/), run:

```sh
pnpx shadcn-ui@latest add button
```

where `button` can be any UI element from the project.

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

This project is MIT-licensed and is free to use and modify for your own projects.

It was created by [Blendist](https://blendist.com) and [Matt Venables](https://venabl.es).
