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
        <VinylBackground 
          vinylAmount={84} 
          discSize={[4, 12]} 
          height={headerBackgroundHeight} 
          tw={"p-4 relative"} 
          position={"fixed"}
        > 
        <div class={tw('inline-flex flex-nowrap flex-col justify-center pt-[40vh] md:(w-full)')}>
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
          <div class={tw('flex justify-center mt-[20vh]')} >
            <span class={tw('pr-1')}>⬇</span> 
            <MoveTo targetId="intro"> Explore </MoveTo>
          </div>
        </div>
        </VinylBackground>
        <div class={tw('w-full p-20 border(gray-900 solid t-0) pt-20 bg-black')}>
          <div class={tw('intro-divider bg-green-600')}></div>
          <div class={tw('relative h-screen block p-5')} id="intro">
            <h2 class={tw('intro-header')}><b>Hi</b>,</h2>
            <Image 
              src="/players/vinyl.png" alt="evolution row vinyl" 
              width="140px" tapeOffsetY={20} 
              tw={"absolute top-0 left(sm:40 md:80) scale(sm:50 md:100) origin-top rotate-12"}
            />
            <div class={tw('w-full')}>
              <div class={tw(`inline-flex flex(& col) centerx`)}>
                <Paragraph offset="20%">We are Spotifio.</Paragraph>
                <Paragraph offset="10%">A Spotify extension.</Paragraph>
                <Paragraph offset="15%">We help you track playlists.</Paragraph>
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
                tw={"centerx top(sm:-3 md:0 ) lg:translate-y-[70vh] scale(sm:75 md:100)"}
              />
              {/* <p class={tw('p-5 min-w-[200px]')}></p> */}
            </div>
          </div>
          <div class={tw('intro-divider bg-blue-600')}></div>
          <div class={tw('h-screen')}>
            <h2 class={tw('intro-header')}>And who are <b>you</b>?</h2>
            <textarea name="" id="" cols={20} rows={10} placeholder="Tell me here" 
              class={tw(`
                relative
                w-screen h-[50vh] -ml-20 top(sm:0 md:[10vh]) 
                p-5 text(2xl black) bg-gray-700
              `)}></textarea>
          </div>
          {/* <div class={tw('intro-divider bg-yellow-600')}></div> */}
          {/* <div class={tw('h-screen')}>
            <h2 class={tw('intro-header')}>How to <b>use</b>?</h2>
            <p class={tw('text(4xl gray-500)')}>It's easy</p>
            <ol class={tw('px-10 pb-5 text-3xl half-w centerx mt-[20vh]')}>
              <li>Just <a href={connectURL}>connect</a> to your Spotify account,</li>
              <li>And you are actually done</li>
            </ol>

            <p class={tw('text(4xl gray-500) mt-[20vh]')}>
              Then app takes snapshots in regullar intervals <br />
              And after that we notify you when the snapshot is ready
            </p>
          </div> */}
          <a href={connectURL}>
            <button class={tw('scale-[1.4] centerx px-3 w-[60%] py-1 bg-green-500 text-black font-bold rounded-full')}>Connect</button>
          </a>
        </div>
      </main>
    </div>
  );
}
