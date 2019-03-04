# venables.github.io

This is the `dev` branch for the Github Page at [matt.venabl.es](https://matt.venabl.es).

Since Github Pages for User accounts [only serve from master](https://help.github.com/articles/user-organization-and-project-pages/), this project
has `dev` set as the default branch, with master being the compiled source (the same compiled source lives in the `dest` directory.

This branch contains raw SCSS, a build system, and a test server.

## Deploying

To ship the latest code, run:

```
yarn build
yarn deploy
```
