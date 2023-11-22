---
title: npx hello
date: 2023-11-20
icon: 👋
---

Today, I put together a tiny, fun npm package called [`hello`](https://www.npmjs.com/package/hello) which lets you browse Github profiles from the command line.

It's intentionally limited and simple. Just type: `npx hello` followed by a Github username and it will print out a summary of the user's profile, including their name, bio, location, and links to their website, Twitter, and Github.

For example:

```sh
npx hello venables
```

### Preview

![npx hello venables](/images/posts/npx-hello.png)

### ... why?

I had reseved the `hello` name quite some time ago, and hand never found a good usecase for it. At first, it was
going to be a websocket-based web framework, but the world has plenty of frameworks. Then I thought it would be a good name for a package that will just print "Hello, world!" in a random language. But that's not very useful.

So the name laid dormant.

Until today.

While browsing Github profiles for candidates at [Catena Labs](https://catena.xyz) (psst: **We're hiring!**), the thought
occurred to me: it would be great for everyone to have a consistent CV, and even better if it was accessible via the command line. So, I quickly tossed together v0 of this project.

Check out the [source code](https://github.com/hello-js/hello) if you're interested. It's a simple Typescript project built from the [`startkit-typescript`](https://github.com/startkit-dev/startkit-typescript) starter template.
