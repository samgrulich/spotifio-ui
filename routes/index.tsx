/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext, PageProps } from "$fresh/server.ts";
import { parseCookies } from "../modules/functions.ts";
import VinylBackground from "../components/VinylBackground.tsx";
import { randomElement, randomElementWeiged } from "../modules/ui/funcitons.ts";
import Disc from "../components/VinylDisc.tsx";
import Image from "../components/TapedImage.tsx";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const rawCookies = req.headers.get("cookie");
    
    if (typeof rawCookies != "undefined")
    {
      const cookies = parseCookies(rawCookies || ""); 
      const credentials = {
        userID: cookies["userID"]
      };
      // return await ctx.render(credentials);
    }

    return await ctx.render();
  },
};

const captions = {
  "At least with your music": 50,
  "Well... Technically": 45,
  "Theretically? yes. Actually? no.": 5,
}

export default function Home() {
  const headerBackgroundHeight = 98;
  const caption = randomElementWeiged(captions);
  const connectURL = "/auth/connect";

  return (
    <div class={tw('')}>
      <main>
        <VinylBackground vinylAmount={100} discSize={[4, 12]} height={headerBackgroundHeight} style={"p-4 relative"}> 
        <div class={tw('md:(translate-y-1/2 centerX w-[50rem] h-[25vh])')}>
          <div class={tw(`inline-block p-5 rounded-lg bg-black bg-opacity-80 md:centerX translate-y-[20vh]`)} style="backdrop-filter: blur(12px)">
            <h1 class={tw('sm:text-4xl md:text-8xl p-2')}>Go back in time!</h1>
            <p class={tw('pl-4')}>{caption}</p>
          </div>
          <a href={connectURL}>
            <button class={tw('scale-150 block centerX px-3 py-2 mt-[35vh] bg-green-500 text-black font-bold rounded-full')}>Connect</button>
          </a>
          <div class={tw('mt-[24vh] text-center')} >
            ⬇ <a href="./#intro" class={tw('text-white')}>Explore</a>
          </div>
        </div>
        </VinylBackground>
        <div class={tw('w-[80%] centerX border(gray-900 solid t-0) pt-10 mt-[8vh] md:mt-[80vh]')}>
          <div class={tw('intro-divider bg-green-900')}></div>
          <div class={tw('relative h-screen hidden md:block')} id="intro">
            <div class={tw('block p-5')}>
            <h2 class={tw('text-9xl mb-16')}><b>Hi</b>,</h2>
            <Image src="/players/vinyl.png" alt="evolution row" width="140px" tapeOffsetY={20} style={"absolute top-0 left-80 origin-top rotate-12"}/>
            <div class={tw('w-[100%]')}>
              <p class={tw('intro-paragraph')}>We're new app. <br /></p>
              <p class={tw('intro-paragraph relative left-[20%] top-[1.5rem]')}>We're kind of an extension to spotify. <br /></p>
              <Image src="/players/walkman.png" alt="evolution row" width="100px" tapeOffsetY={15} style={"absolute top-[16rem] left-10"}/>
              <p class={tw('intro-paragraph relative left-[30%] top-[3rem]')}>We help you track playlists. <br /></p>
              <Image src="/players/mp3.png" alt="evolution row" width="200px" imgStyle="origin-bottom rotate-90 relative -translate-x-[15%]" style={"absolute top-[8rem] -right-[7rem]"}/>
              <p class={tw('intro-paragraph relative left-[10%] top-[4.5rem]')}>So you can see what you were listening to.<br /></p>
              <Image src="/players/ipod.png" alt="evolution row" width="100px" tapeOffsetY={12} style={"centerX top-[6rem] translate-y-1/2"}/>
              {/* <p class={tw('p-5 min-w-[200px]')}></p> */}
            </div>
            </div>
          </div>
          <div class={tw('intro-divider bg-blue-900')}></div>
          <div>
            <h2 class={tw('text-9xl mb-16')}>How to <b>use</b>?</h2>
            <ol class={tw('px-10 pb-5 centerX')}>
              <li>It's easy.</li>
              <li>Just <a href={connectURL}>connect</a> the account,</li>
              <li>And you are actually done</li>
              <li>The app takes snapshots in regullar intervals</li>
              <li>Then notifies you that your snapshot is ready</li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  );
}
