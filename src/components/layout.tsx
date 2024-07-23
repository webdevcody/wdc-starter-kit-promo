import { type PropsWithChildren } from "hono/jsx";
import { Footer } from "./footer";
import { html } from "hono/html";

export function Layout({
  children,
  title = "WDC Starter Kit",
}: PropsWithChildren<{ title?: string }>) {
  return (
    <>
      {html`<!doctype html>`}
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>{title}</title>
          <link rel="stylesheet" href="/static/styles.css" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          ></link>
        </head>

        <body className="bg-black text-white">
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
