<img src="./app/apple-icon.png" align="right" />

# venabl.es

> The venabl.es homepage

## Getting Started

When you first check out a this project, you should run the following command to get your environment all set up:

```sh
bun run setup
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
bun run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

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
bun run check
```

### Linting

```sh
bun run lint
```

### Type Checking

```sh
bun run type-check
```

### Formatting with Prettier

```sh
bun run format
```

to check for format errors, run:

```sh
bun run format:check
```

### Testing via Jest

```sh
bun run test
```

## Patching Packages

Occasionally you need to patch a dependency. In general, you can use [patch-package](https://github.com/ds300/patch-package), but it does not yet have bun support ([See the open PR](https://github.com/ds300/patch-package/pull/490)). To patch a package, you should do he following:

1. Run `bun install --yarn` which will create a `yarn.lock` file (this will be temporary for us).
2. Modify the packages you need to patch within `node_modules`.
3. Run `bunx patch-package <package-name>`
4. Remove the `yarn.lock` file (`rm yarn.lock`)

Now your packages will be patched like normal.

## ❤️ Open Source

This project is MIT-licensed and is free to use and modify for your own projects.

It was created by [Matt Venables](https://venabl.es).
