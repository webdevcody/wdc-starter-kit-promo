import { Lines } from "../components/lines";
import { Layout } from "../components/layout";
import type { App } from "..";

export function SubscribedPage() {
  return (
    <Layout>
      <section class="relative min-h-screen gap-8 bg-gradient-to-b from-slate-900 to-slate-800 pt-12 shadow-md">
        <Lines />
        <div class="container relative z-20 mx-auto py-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <a href="/" class="flex items-center gap-1 hover:text-blue-100">
                <img
                  src="/static/wdc.jpeg"
                  width="60"
                  height="60"
                  alt="hero image"
                  class="mr-4 h-16 w-16 rounded-full"
                />
                <div class="flex flex-col">
                  <div class="text-xs sm:text-xl">Coming Soon...</div>
                  <div class="text-lg sm:text-3xl">WDC StarterKit</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="container relative z-20 mx-auto flex flex-col justify-center">
          <div class="mx-auto grid max-w-screen-xl px-4 pb-8 pt-12 lg:grid-cols-12 lg:gap-8 lg:py-24 lg:pt-16 xl:gap-0">
            <div class="col-span-7 mr-auto place-self-center">
              <h1 class="mb-6 max-w-2xl text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                Thanks for subscribing!
              </h1>

              <h2 class="mb-8 text-2xl font-light">
                I will send out an email when the starter kit is ready for you
                to play around with!
              </h2>

              <a
                href="/"
                class="rounded bg-slate-100 px-6 py-4 text-xl text-black hover:bg-slate-300"
              >
                Go Back
              </a>
            </div>

            <div class="col-span-1"></div>

            <div class="col-span-4 w-full">
              <img
                class="hidden w-full rounded-xl shadow-xl md:block"
                width="300"
                height="200"
                src="/static/computer.jpeg"
                alt="hero image"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function registerSubscribed(app: App) {
  app.get("/subscribed", (c) => {
    return c.html(<SubscribedPage />);
  });
}
