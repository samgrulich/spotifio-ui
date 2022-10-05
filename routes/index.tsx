/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext, PageProps } from "$fresh/server.ts";
import { parseCookies } from "../modules/functions.ts";
import VinylBackground from "../components/VinylBackground.tsx";
import { randomElement, randomElementWeiged } from "../modules/ui/funcitons.ts";
import Disc from "../components/VinylDisc.tsx";
import Image from "../components/TapedImage.tsx";
import Paragraph from "../components/IntroParagraph.tsx";

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
          <div class={tw('intro-divider bg-green-600')}></div>
          <div class={tw('relative h-screen ')} id="intro">
            <div class={tw('block p-5')}>
            <h2 class={tw('intro-header')}><b>Hi</b>,</h2>
            <Image src="/players/vinyl.png" alt="evolution row vinyl" width="140px" tapeOffsetY={20} style={"absolute top-0 left(sm:40 md:80) scale(sm:50 md:100) origin-top rotate-12"}/>
            <div class={tw('w-[100%]')}>
              <div class={tw(`centerX left(sm:[40%] md:[68%]) flex(& col)`)}>
                <Paragraph offset="20%">We are Spotifio.</Paragraph>
                <Paragraph offset="10%">We're a Spotify extension.</Paragraph>
                <Paragraph offset="15%">We help you track playlists.</Paragraph>
                <Paragraph offset="5%">So you can see what you were listening to.</Paragraph>
              </div>
              <Image src="/players/walkman.png" alt="evolution row walkman" width="100px" tapeOffsetY={15} style={"absolute top-[45vh] left-10 hidden md:block"}/>
              <Image src="/players/mp3.png" alt="evolution row mp3" width="200px" imgStyle="origin-bottom rotate-90 relative -translate-x-[15%]" style={"absolute top-[12rem] -right-[7rem] sm:hidden lg:block"}/>
              <Image src="/players/ipod.png" alt="evolution row ipod" width="100px" tapeOffsetY={12} style={"centerX top(sm:4 md:0 ) lg:translate-y-1/2 scale(sm:75 md:100)"}/>
              {/* <p class={tw('p-5 min-w-[200px]')}></p> */}
            </div>
            </div>
          </div>
          <div class={tw('intro-divider bg-blue-600')}></div>
          <div class={tw('h-screen')}>
            <h2 class={tw('intro-header')}>And who are <b>you</b>?</h2>
            {/* <Disc size={20}/> */}
            <textarea name="" id="" cols={20} rows={10} placeholder="Tell me here" class={tw('w-screen h-[50vh] relative -left-[13%] top-(sm:0 md:[10vh]) p-5 text(2xl black) bg-gray-700')}></textarea>
            <VinylBackground vinylAmount={100} discSize={[20, 40]}/>
          </div>
          {/* <div class={tw('intro-divider bg-yellow-600')}></div> */}
          {/* <div class={tw('h-screen')}>
            <h2 class={tw('intro-header')}>How to <b>use</b>?</h2>
            <p class={tw('text(4xl gray-500)')}>It's easy</p>
            <ol class={tw('px-10 pb-5 text-3xl half-w centerX mt-[20vh]')}>
              <li>Just <a href={connectURL}>connect</a> to your Spotify account,</li>
              <li>And you are actually done</li>
            </ol>

            <p class={tw('text(4xl gray-500) mt-[20vh]')}>
              Then app takes snapshots in regullar intervals <br />
              And after that we notify you when the snapshot is ready
            </p>
          </div> */}
          <a href={connectURL}>
            <button class={tw('scale-150 block centerX px-3 py-2 my-32 bg-green-500 text-black font-bold rounded-full')}>Connect</button>
          </a>
        </div>
      </main>
    </div>
  );
}
