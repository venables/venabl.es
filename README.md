<img src="./public/apple-touch-icon.png" align="right" />

# StartKit

> A sane starting point for Next.js projects.

## Features

- [Next.js 13.2](https://nextjs.org) with the `/app` directory
- [Typescript](https://www.typescriptlang.org/) for a rock-solid codebase
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for readable, safe code.
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS.
- The beautiful [Inter](https://rsms.me/inter/) typeface.
- [Next Metadata API](https://beta.nextjs.org/docs/api-reference/metadata) for SEO handling.
- [Jest](https://jestjs.io/) testing, optimized for Next.js
- Automatic Dark Mode support (based on system setting).
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

```sh
pnpm run setup
```

## Running the server

```bash
pnpm run dev
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
