import { DiscordIcon, GithubIcon, XIcon, YoutubeIcon } from "./icons";
import { Lines } from "./lines";

export function Footer() {
  return (
    <section className="relative bg-gradient-to-b from-green-200 to-blue-100 py-12 dark:from-slate-950 dark:to-slate-800">
      <Lines />

      <div className="relative z-20 flex flex-col items-center gap-8">
        <div className="text-xl">Follow for updates!</div>

        <div className="flex justify-center gap-8">
          <a href="https://youtube.com/@webdevcody" target="_blank">
            <YoutubeIcon className="h-10 w-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
          </a>
          <a href="https://x.com/webdevcody" target="_blank">
            <XIcon className="h-10 w-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
          </a>
          <a href="https://github.com/webdevcody" target="_blank">
            <GithubIcon className="h-10 w-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
          </a>
          <a href="https://discord.gg/N2uEyp7Rfu" target="_blank">
            <DiscordIcon className="h-10 w-10 hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
