import { Hono } from "hono";
import { Main } from "./pages";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  return c.html(<Main />);
});

app.notFound((c) => {
  return c.html("not found bro");
});

export default app;
