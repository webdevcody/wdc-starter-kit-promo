import { Lines } from "../components/lines";
import { Layout } from "../components/layout";
import { cn, popFlashMessage, setFlashMessage } from "../util";
import { database } from "../db";
import { newsletters } from "../db/schema";
import { Resend } from "resend";
import { env } from "../env";
import type { App } from "../server";
import { z } from "zod";
import { GithubIcon, GumroadIcon } from "../components/icons";
import { html } from "hono/html";
const resend = new Resend(env.EMAIL_SERVER_PASSWORD);

export function MainPage({ flashMessage }: { flashMessage?: string }) {
  return (
    <Layout>
      <>
        {/* hero */}
        <section class="relative min-h-screen gap-8 bg-gradient-to-b from-slate-900 to-slate-800 pt-12 shadow-md">
          <Lines />
          {/* logo */}
          <div class="container relative z-20 mx-auto py-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center px-8">
                <a href="/" class="flex items-center gap-1 hover:text-blue-100">
                  <img
                    src="/static/wdc.jpeg"
                    width="60"
                    height="60"
                    alt="hero image"
                    class="mr-4 h-16 w-16 rounded-full"
                  />
                  <div class="flex flex-col">
                    <div class="text-lg sm:text-3xl">WDC SaaS Starter Kit</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* cta */}
          <div class="container relative z-20 mx-auto flex flex-col justify-center px-8">
            <div class="mx-auto grid max-w-screen-xl px-4 pb-8 pt-12 lg:grid-cols-12 lg:gap-8 lg:py-24 lg:pt-16 xl:gap-0">
              <div class="col-span-7 mr-auto place-self-center">
                <h1 class="mb-6 max-w-2xl text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl xl:text-6xl">
                  🚀 I&apos;ve built the{" "}
                  <span class="italic text-red-400">perfect</span> SaaS starter
                  kit.
                </h1>

                <h2 class="mb-8 text-2xl font-light">
                  This Next.js starter kit includes everything you need to build
                  a SaaS product. From authentication to analytics, it&apos;s
                  everything you need to launch your next project.
                </h2>

                <div className="flex flex-wrap gap-4 sm:flex-nowrap md:flex-wrap">
                  <a
                    href="https://github.com/webdevcody/wdc-saas-starter-kit"
                    target="_blank"
                    class="flex w-fit items-center gap-2 rounded bg-white px-6 py-4 text-lg font-normal text-black hover:bg-slate-100"
                  >
                    <GithubIcon class="size-6" /> Get the Free Starter Kit
                  </a>

                  <a
                    href="https://webdevcody.gumroad.com/l/wdc-saas-starter-kit-walkthrough"
                    target="_blank"
                    class="flex w-fit items-center gap-2 rounded bg-wdc-blue px-6 py-4 text-lg font-normal text-white hover:bg-slate-50 hover:text-black"
                  >
                    <GumroadIcon class="size-6" /> Video Walkthroughs
                    <br />
                    (early access 50% off)
                  </a>
                </div>
              </div>

              <div class="col-span-1"></div>

              <div class="col-span-4 w-full">
                <img
                  class="hidden w-full rounded-xl shadow-xl lg:block"
                  width="300"
                  height="200"
                  src="/static/computer.jpeg"
                  alt="hero image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* newsletter */}
        <section class="relative border-b border-t border-slate-500 bg-gray-950 bg-space bg-repeat px-8 py-12 shadow-sm">
          <div class="container mx-auto max-w-4xl space-y-12 pb-12 pt-12 text-center text-gray-200">
            <h2 class="mb-4 text-4xl">Subscribe for future updates 🚀</h2>

            <form action="/" method="POST" class="flex justify-center gap-2">
              <label class="sr-only" htmlFor="email" />
              <input
                required
                type="email"
                name="email"
                class={cn(
                  "text w-full max-w-[320px] rounded bg-slate-100 px-4 py-3 text-slate-900 placeholder-slate-600",
                  {
                    "border-2 border-red-500": !!flashMessage,
                  },
                )}
                id="email"
                placeholder="Enter your email address"
              />
              <button class="flex items-center justify-center gap-2 rounded bg-white px-3 text-black hover:bg-slate-100">
                Subscribe
              </button>
            </form>

            {flashMessage && (
              <div class="mb-4 text-red-500">{flashMessage}</div>
            )}
          </div>
        </section>

        {/* guide */}
        <section class="relative border-b border-t border-slate-500 bg-gradient-to-b from-gray-950 to-gray-900 bg-repeat px-8 py-12 shadow-sm">
          <div class="container mx-auto max-w-4xl pb-12 pt-12 text-center text-gray-200">
            <h2 class="mb-8 text-5xl font-bold">Need a guide?</h2>

            <p class="mb-6 text-xl leading-10">
              I&apos;m working on a complete walkthrough on how to setup the
              project including any third party services, hosting, and how to
              run migrations and add new features, etc.
            </p>

            <div id="video-container" class="mb-12">
              {/* The iframe will be inserted here by JavaScript */}
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/6Z9SvYb0Q5w?si=eu-__ekXU-iGVH8s"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p class="mb-6 py-4 text-xl leading-10">
              I am currently working on the video series and will be releasing
              the videos as I record and edit them. You can purchase the early
              access to these videos at a discounted price.
            </p>

            <a
              href="https://webdevcody.gumroad.com/l/wdc-saas-starter-kit-walkthrough"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-12 inline-block rounded bg-white px-6 py-4 text-lg font-semibold text-black transition-colors duration-300 hover:bg-slate-100"
            >
              Purchase the Early Access Video Walkthroughs (50% off - $25)
            </a>
          </div>
        </section>

        {/* what's included */}
        <section class="relative border-b border-t border-slate-500 bg-gray-950 bg-plus bg-repeat px-8 py-12 shadow-sm">
          <div class="container mx-auto max-w-4xl pt-12 text-gray-200">
            <h2 class="mb-8 text-5xl font-bold">What's Included in the Kit?</h2>

            <p class="mb-6 text-xl leading-10">
              For those who watch my channel, you know I work on lot of
              different side projects. I&apos;ve even lost track how many times
              I&apos;ve reinstalled the same ShadCN components. To speed up my
              personal time to launch new products, I&apos;m building a complete
              starter kit which includes most of everything you&apos;d need when
              creating a new online SaaS product.
            </p>

            <p class="mb-8 text-xl leading-10">Buckle up, it includes:</p>

            <ul class="mb-12 grid grid-cols-2 gap-4 md:mx-12 md:grid-cols-3">
              <li>🚦 Next.js 14</li>
              <li>📦 DrizzleORM</li>
              <li>🌑 ShadCN</li>
              <li>🌈 Tailwind CSS</li>
              <li>📝 Typescript</li>
              <li>🔒 Authentication (Oslo & Artic) </li>
              <li>🌐 Google & Github Login </li>
              <li>🔗 Magic Link Login </li>
              <li>👥 Role Based Authorization </li>
              <li>🗄️ File Storage (R2) </li>
              <li>🛡️ DDoS Protection </li>
              <li>🌐 Hosting Walkthrough </li>
              <li>🌟 Postgres</li>
              <li>💳 Stripe Subscriptions </li>
              <li>📚 Documentation </li>
              <li>📰 Newsletter </li>
              <li>⏳ Coming Soon Mode</li>
              <li>🚧 Maintenance Mode</li>
              <li>📧 Emailing (Resend) </li>
              <li>📊 Analytics (Posthog) </li>
              <li>🚀 And More!</li>
            </ul>

            <p class="mb-24 mt-24 text-center text-xl leading-10">
              I don&apos;t want to sell you code. I want to{" "}
              <strong>teach you</strong> how to build, launch, and iterate on
              your product. I&apos;m excited to help you build!
            </p>
          </div>
        </section>

        {/* purchase */}
        <section class="relative border-b border-t border-slate-500 bg-gray-950 bg-space bg-repeat px-8 py-12 shadow-sm">
          <div class="container mx-auto max-w-4xl space-y-12 pb-12 pt-12 text-center text-gray-200">
            <h2 class="text-3xl font-bold md:text-5xl">Start Shipping Today</h2>

            <a
              href="https://webdevcody.gumroad.com/l/wdc-saas-starter-kit-walkthrough"
              target="_blank"
              class="inline-block rounded bg-white px-6 py-4 text-lg font-normal text-black hover:bg-slate-100"
            >
              Purchase the Video Walkthroughs
            </a>
          </div>
        </section>

        {/* {html` <script>
          document.addEventListener("DOMContentLoaded", function () {
            var options = {
              root: null,
              rootMargin: "0px",
              threshold: 0.1,
            };

            var observer = new IntersectionObserver(function (
              entries,
              observer,
            ) {
              entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                  var container = entry.target;
                  var iframe = document.createElement("iframe");
                  iframe.src =
                    "https://www.youtube.com/embed/6Z9SvYb0Q5w?si=eu-__ekXU-iGVH8s";
                  iframe.width = "100%";
                  iframe.height = "415";
                  iframe.title = "YouTube video player";
                  iframe.frameBorder = "0";
                  iframe.allow =
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                  iframe.referrerPolicy = "strict-origin-when-cross-origin";
                  iframe.allowFullscreen = true;

                  container.appendChild(iframe);
                  observer.unobserve(container);
                }
              });
            }, options);

            var videoContainer = document.getElementById("video-container");
            if (videoContainer) {
              observer.observe(videoContainer);
            }
          });
        </script>`} */}
      </>
    </Layout>
  );
}

export function registerLanding(app: App) {
  app.get("/", (c) => {
    const flashMessage = popFlashMessage(c);

    if (process.env.NODE_ENV === "production") {
      fetch("https://projectplannerai.com/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: "user viewed landing page",
          projectId: "j57cpv51pmj7q0n20rqgn1q6ax6q3vrx",
        }),
      });
    }

    return c.html(<MainPage flashMessage={flashMessage} />);
  });

  app.post("/", async (c) => {
    const body = await c.req.formData();
    const email = body.get("email") as string;

    const { success } = z.string().email().safeParse(email);

    if (!success) {
      setFlashMessage(c, "Invalid email address");
      return c.redirect("/");
    }

    await database
      .insert(newsletters)
      .values({
        email,
      })
      .onConflictDoNothing();

    const { error } = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: env.RESEND_AUDIENCE_ID,
    });

    return c.redirect("/subscribed");
  });
}
