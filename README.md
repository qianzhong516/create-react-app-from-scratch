## Create React From Scratch

### Client Side Rendering

---

#### Build

Type check and build the project by running

```
npm run build
```

Kick off the webpack dev server by running

```
npm run dev
```

### Server side Rendering

---

#### The idea of the isomorphic rendering

SSR can greatly improve user's first interaction experience by optimizing the first page load time. It also provides a better search engine experience where the crawl bot can access more meaningful content in your pre-generated html file whereas a pure client-side rendering page only contains `<div id="root"></div>`.

#### Build

Type check and build the project by running

```
npm run build
```

Boost up the server by running

```
npm run server
```

Access http://localhost:3000 to see the results.

#### During development

Run below scripts to watch and build files automatically along with the changes.

With development mode, run

```
npm run dev:watch
```

With production mode, run

```
npm run prod:watch
```

You can also run

```
npm run type-check:watch
```

to prevent any type errors while developing the app.
