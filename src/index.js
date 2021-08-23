// starting point for server side app
import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

// proxy
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);

// public -> webpack.client.js outputh path & script tag src="bundle.js" defaults to this folder
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);

  // this returns an array of promises representing all the pending network reqs
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // once all promises resolved, will render
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    // if there is a redirect
    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// console.log(matchRoutes(Routes, req.path));
// [
//   {
//     route: {
//       loadData: [Function: loadData],
//       path: '/users',
//       component: [Function]
//     },
//     match: { path: '/users', url: '/users', isExact: true, params: {} }
//   }
// ]
