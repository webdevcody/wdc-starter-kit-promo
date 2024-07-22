import {
  DiscordIcon,
  GithubIcon,
  XIcon,
  YoutubeIcon,
} from "../components/icons";

function Lines() {
  return (
    <svg
      class="absolute inset-0 z-10 h-full w-full stroke-slate-800"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width="230"
          height="230"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 230V.5H230" fill="none"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      ></rect>
    </svg>
  );
}

export function Main() {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Parabola</title>
        <link rel="stylesheet" href="/static/styles.css" />
      </head>
      <body className="text-white bg-black">
        <section class="relative min-h-screen gap-8 bg-gradient-to-b pt-12 shadow-md from-slate-900 to-slate-800">
          <Lines />
          <div class="relative z-20 container mx-auto py-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <a href="/" class="hover:text-blue-100 flex gap-1 items-center">
                  <img
                    src="/static/wdc.jpeg"
                    width="60"
                    height="60"
                    alt="hero image"
                    class="rounded-full w-16 h-16 mr-4"
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
                  🚀 I&apos;m working on the{" "}
                  <span class="italic text-red-400">perfect</span> SaaS starter
                  kit.
                </h1>

                <h2 class="mb-8 text-2xl font-light">
                  This Next.js starter kit will enable you to setup your own
                  SaaS product with monthly subscriptions, including a complete
                  walkthrough on how to set it all up and maintain it.
                </h2>

                <p class="mb-4 text-3xl">Get Notified When I Launch 🚀</p>

                <form class="flex gap-2">
                  <label class="sr-only" htmlFor="email" />
                  <input
                    required
                    type="email"
                    name="email"
                    class="w-full py-2 px-2 rounded text max-w-[320px] bg-slate-100 text-slate-900 placeholder-slate-600"
                    id="email"
                    placeholder="Enter your email address"
                  />
                  <button class="rounded bg-slate-100 text-black flex gap-2 items-center justify-center px-3">
                    Subscribe
                  </button>
                </form>
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

        <section class="relative border-b border-t border-slate-400 bg-paper bg-repeat py-12 shadow-sm dark:border-slate-500 dark:bg-gray-950 dark:bg-plus">
          <div class="container mx-auto max-w-4xl pt-12 dark:text-gray-200">
            <h2 class="mb-8 text-5xl font-bold">What I&apos;m working on 🛠️</h2>

            <p class="mb-6 text-xl leading-10">
              For those who watch my channel, you know I work on lot of
              different side projects. I&apos;ve even lost track how many times
              I&apos;ve reinstalled the same ShadCN components. To speed up my
              personal time to launch new products, I&apos;m building a complete
              starter kit which includes most of everything you&apos;d need when
              creating a new online SaaS product.
            </p>

            <p class="mb-8 text-xl leading-10">
              Buckle up, it&apos;s going to be BIG; I plan to include:
            </p>

            <ul class="mb-12 grid grid-cols-2 gap-4 md:mx-12 md:grid-cols-3">
              <li>🚦 Next.js 14</li>
              <li>📦 DrizzleORM</li>
              <li>🌑 ShadCN</li>
              <li>🌈 Tailwind CSS</li>
              <li>📝 Typescript</li>
              <li>🔒 Authentication (Next-Auth) </li>
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

            <p class="mb-6 text-xl leading-10">
              Additionally, I&apos;m working on a complete walkthrough on how to
              setup the project including any third party services, hosting, and
              how to run migrations and add new features, etc.
            </p>

            <p class="mb-24 mt-24 text-center text-xl leading-10">
              I don&apos;t want to sell you code. I want to{" "}
              <strong>teach you</strong> how to build, launch, and iterate on
              your product. I&apos;m excited to help you build!
            </p>
          </div>
        </section>

        <section className="relative py-12 bg-gradient-to-b dark:from-slate-950 dark:to-slate-800 from-green-200 to-blue-100">
          <Lines />

          <div className="z-20 relative flex flex-col items-center gap-8 ">
            <div className="text-xl">Follow for updates!</div>

            <div className="flex justify-center gap-8">
              <a href="https://youtube.com/@webdevcody" target="_blank">
                <YoutubeIcon className="w-10 h-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
              </a>
              <a href="https://x.com/webdevcody" target="_blank">
                <XIcon className="w-10 h-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
              </a>
              <a href="https://github.com/webdevcody" target="_blank">
                <GithubIcon className="w-10 h-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
              </a>
              <a href="https://discord.gg/4kGbBaa" target="_blank">
                <DiscordIcon className="w-10 h-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
              </a>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
