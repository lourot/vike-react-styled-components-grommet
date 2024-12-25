# Vike + styled-components + grommet example

This is an example of integrating [Vike](https://vike.dev) with [styled-components](https://styled-components.com/)
and [grommet](https://v2.grommet.io/).

This was born out of the following discussions:

- https://github.com/vikejs/vike/issues/1217
- https://github.com/tdonhauser/vite-ssr-styled-components-grommet/pull/1
- https://github.com/grommet/grommet/issues/6976

Special thanks to [tdonhauser](https://github.com/tdonhauser) for initially digging into this.

Run it with:

```bash
pnpm install
pnpm run dev
```

Follow the initial commits in this repo one by one in order to understand how this is built:

- First, an empty [vike-react](https://github.com/vikejs/vike-react) project was scaffolded using
  [Bati](https://batijs.github.io/).
- Then, in order to be able to modify [onRenderHtml()](https://vike.dev/onRenderHtml), which is encapsulated in
  vike-react, we copied it in this repository. This process is called "ejecting" `onRenderHtml()`.
- We then added styled-components to the project, which required to extend `onRenderHtml()`.
- Finally added grommet.

As you can see, server-side rendering works: the initial HTML delivered by `onRenderHtml()` contains the styles of the
styled-components and grommet components and we don't experience any
[FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).
