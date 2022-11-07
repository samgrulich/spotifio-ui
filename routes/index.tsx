/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

import { Handlers, HandlerContext } from "$fresh/server.ts";
import { parseCookies } from "../modules/functions.ts";
import { randomElementWeiged } from "../modules/ui/functions.ts";

import MoveTo from "../islands/AnimateScroll.tsx";
import Image from "../components/TapedImage.tsx";
import Paragraph from "../components/IntroParagraph.tsx";
import VinylBackground from "../components/VinylBackground.tsx";
import Section from "../components/IntroSection.tsx";

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
  "Theoretically? yes. Actually? no.": 5,
}

export default function Home() {
  const headerBackgroundHeight = 98;
  const caption = randomElementWeiged(captions);
  const connectURL = "/auth/connect";

  return (
    <div class={tw('')}>
      <main>
        <div class={tw('inline-flex flex-nowrap flex-col justify-center pt-[30vh] (w-full)')}>
          <div class={tw(`inline-block p-5 mx-auto rounded-xl bg-black`)}>
            <h1 class={tw('sm:text-4xl md:text-8xl p-2 font-bold')}>Go back in time!</h1>
            <p class={tw('pl-4')}>{caption}</p>
          </div>
          <div>
            <a href={connectURL}>
              <button class={tw(`
                scale-[1.4] block 
                px-3 py-2 mt-[10vh] mx-auto
                text-black font-bold 
                bg-green-500 
                rounded-full`
              )}>Connect</button>
            </a>
          </div>
          <div class={tw('flex justify-center mt-[30vh]')} >
            <span class={tw('pr-1')}>⬇</span> 
            <MoveTo targetId="intro"> Explore </MoveTo>
          </div>
        </div>
        <div class={tw('w-full md:p-20 border(gray-900 solid t-0) pt-20')}>
          <Section dividerColor="green" tw={'relative h-screen block p-5 bg-black'} id="intro" bg="black">
            <h2 class={tw('intro-header')}><b>Hi</b>,</h2>
            <Image 
              src="/players/vinyl.png" alt="evolution row vinyl" 
              width="140px" tapeOffsetY={20} 
              tw={"absolute top-0 left(sm:40 md:80) scale(sm:50 md:100) origin-top rotate-12"}
            />
            <div class={tw('w-full')}>
              <div class={tw(`inline-flex flex(& col) centerx sm:w-full`)}>
                <Paragraph offset="16%">We are Spotifio.</Paragraph>
                <Paragraph offset="10%">A Spotify extension.</Paragraph>
                <Paragraph offset="13%">We help you track playlists.</Paragraph>
                <Paragraph offset="0">So you can see what you were listening to.</Paragraph>
              </div>
              <Image 
                src="/players/walkman.png" alt="evolution row walkman" 
                width="100px" tapeOffsetY={15} 
                tw={"absolute top-[45vh] left-10 hidden md:block"}
              />
              <Image 
                src="/players/mp3.png" alt="evolution row mp3" 
                width="200px" imgtw="origin-bottom rotate-90 relative" 
                tw={"absolute top-[12rem] -right-0 sm:hidden lg:block"}
              />
              <Image 
                src="/players/ipod.png" alt="evolution row ipod" 
                width="100px" tapeOffsetY={12} 
                tw={"centerx top(sm:-3 md:0 ) translate-y([72vh] lg:[70vh]) scale(sm:75 md:100)"}
              />
            </div>
          </Section>
          <Section dividertw="opacity-0" tw='inline-block centerx-r'>
            <h2 class={tw('text(2xl md:6xl)')}>Tell your friends about us!</h2>
            <span class={tw('centerx-r -ml-12')}>Pretty please <span>&#128063;</span></span>
          </Section>
          <a href={connectURL} class={tw('centerx-r')}>
            <button class={tw('scale-[1.4] centerx px-3 py-1 bg-green-500 text-black font-bold rounded-full')}>Connect</button>
          </a>
        </div>
      </main>
    </div>
  );
}
