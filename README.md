## Create React From Scratch

### Build

Type check and build the project by running

```
npm run build
```

Kick off the webpack dev server by running

```
npm run dev
```

### The idea of the isomorphic rendering

SSR can greatly improve user's first interaction experience, where it optimizes SEO search experience and first page load time. In this demo, by accessing localhost:3000 will invoke server to read a pre-generated html file by `HtmlWebpackPlugin`, and inject the component we want to render into the `#root` div. On the client side, `hydrateRoot` is called to make sure the server generated content matches with the content we want to render.
