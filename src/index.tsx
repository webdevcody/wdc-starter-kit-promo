import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { registerSubscribed } from "./pages/subscribed";
import { registerLanding } from "./pages";

const app = new Hono();

export type App = typeof app;

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./static/favion.ico" }));
app.use("/robots.tsx", serveStatic({ path: "./static/robots.txt" }));
app.use("/sitemap.xml", serveStatic({ path: "./static/sitemap.xml" }));

registerLanding(app);
registerSubscribed(app);

app.notFound((c) => {
  return c.html("not found bro");
});

export default app;
