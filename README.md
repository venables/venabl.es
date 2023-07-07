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
   git merge startkit/main
   ```

   Once you run `./bin/init`, it will be safe to delete. You can also delete
   this section of the README.

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

## Database

The Prisma adapter is set up to use PostgreSQL by default, but any database will work. Simply set `DATABASE_URL` in your `.env` file to work.

The database `startkit_development` should be created during the `pnpm run setup` step (defined in `./bin/setup`).

Ensure you have postgres running locally. For example, on MacOS with homebrew:

```sh
brew install postgresql@14
brew services start postgresql@14
```

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
