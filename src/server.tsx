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
app.use(
  "/starterkitcard.png",
  serveStatic({ path: "./static/starterkitcard.png" }),
);

registerLanding(app);
registerSubscribed(app);

app.notFound((c) => {
  return c.html("not found bro");
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

setInterval(() => {
  const usage = process.memoryUsage();
  console.log({
    rss: usage.rss,
    heapTotal: usage.heapTotal,
    heapUsed: usage.heapUsed,
  });
}, 60000);

export default app;
