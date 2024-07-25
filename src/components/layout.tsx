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
          <title>{title}</title>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
          <meta
            name="keywords"
            content="next.js, starter kit, saas, ecommerce, digital products, saas code kit, indie hacking, indie hacker kit, micro saas, entrepreneurship, Code Starter Kit, SaaS Product Launch, Code Documentation Tutorial, Beginner Coding Kit, Start-up SaaS Kit, Coding Guides and Resources, Video Tutorials for Coding, Beginner SaaS Guide, Launch your First SaaS, Step-by-step Coding Kit, SaaS Launch Kit, Software as a Service Starter, Easy Code Launch Kit, Coding Skills for SaaS, Starter Kit for SaaS, Code, Document, Launch, Comprehensive Coding Starter Kit, Master SaaS Product Launch, SaaS Documentation Tutorial, First-Time Coders Kit, SaaS coding course, Initiate SaaS Journey, Seamless SaaS Launch Guide, First SaaS Product Guidance, Bootstrap SaaS Tutorial, Ultimate SaaS Starter Pack, Learning Guide for SaaS, DIY SaaS Kit, Code your SaaS Product, All-in-one Coding Starter Kit"
          />
          <meta
            name="description"
            content="The code kit to help you quickly setup an online store and sell your digital assets without a middleman skipping off the top of your profits."
          />
          <meta property="og:title" content="WDCStarterKit.com" />
          <meta
            property="og:description"
            content="I'm building the ultimate next.js starter kit to help you hit the ground running on your next saas product."
          />
          <meta property="og:url" content="https://wdcstarterkit.com" />
          <meta property="og:site_name" content="WDC StarterKit" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://wdcstarterkit.com/starterkitcard.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://wdcstarterkit.com/starterkitcard.png"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="418" />
          <meta
            property="og:image:alt"
            content="The WDC StarterKit social media card image"
          />
          <link
            rel="stylesheet"
            href={`/static/styles.css?ver=${process.env.COMMIT_SHA}`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          {process.env.NODE_ENV !== "production" && (
            <script src="/static/livereload.js"></script>
          )}
        </head>

        <body className="bg-black text-white">
          {children}
          <Footer />

          {html`
            <script>
              document.addEventListener("DOMContentLoaded", (event) => {
                var fontLink = document.createElement("link");
                fontLink.href =
                  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap";
                fontLink.rel = "stylesheet";
                document.head.appendChild(fontLink);
              });
            </script>
          `}
        </body>
      </html>
    </>
  );
}
