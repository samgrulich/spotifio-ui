/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext, PageProps } from "$fresh/server.ts";
import { parseCookies } from "../modules/functions.ts";
import VinylBackground from "../components/VinylBackground.tsx";
import { randomElement, randomElementWeiged } from "../modules/ui/funcitons.ts";

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
  "Yes, but acutally no": 5,
}

export default function Home() {
  const headerBackgroundHeight = 40;
  const caption = randomElementWeiged(captions);

  return (
    <div class={tw('')}>
      <main>
        {/* <h1>Home</h1>
        <p>Welcome! Spotfio lets you track your spotify playlists and listen to music with friends</p>
        <button><a href="/auth/connect">Spotify Connect</a></button> */}

        <VinylBackground vinylAmount={10} discSize={[4, 12]} height={headerBackgroundHeight}> 
          <div class={tw(`inline-block h-[${headerBackgroundHeight}vh] relative top-0 left-1/2 translate-y-1/2 -translate-x-1/2`)}>
            <h1 class={tw('text-6xl')}>Go back in time!</h1>
            <p>{caption}</p>
          </div> 
        </VinylBackground>
        <div class={tw('h-48')}>
          <button class={tw('centered -mt-10 p-5 bg-green-500 text-black font-bold rounded-full')}>Connect</button>
        </div>
        <div class={tw('w-[80%] centerX border(gray-900 solid t-1) pt-5 pt-10')}>
          <h2>Hi,</h2>
          <div class={tw('px-10 pb-5 centerX')}>
            <p>
              We're new app. <br />
              We're kind of an extension to spotify. <br />
              We can help you to track your playlists. <br />
              So you can see what you were listening to in past. <br />
            </p>
          </div>
          <h2>How to?</h2>
          <div class={tw('px-10 pb-5 centerX')}>
            <p>
              It's easy. <br/> 
              Just connect the account, <br />
              And you are actually done <br />
              The app takes snapshots in regullar intervals <br />
              Then notifies you that your snapshot is ready <br />
            </p> 
          </div>
        </div>
      </main>
    </div>
  );
}
