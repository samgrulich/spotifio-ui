/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext, PageProps } from "$fresh/server.ts";
import { parseCookies } from "../modules/functions.ts";

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

export default function Home() {
  return (
    <div class={tw('')}>
      <main>
        <h1>Home</h1>
        <p>Welcome! Spotfio lets you track your spotify playlists and listen to music with friends</p>
        <button><a href="/auth/connect">Spotify Connect</a></button>
      </main>
    </div>
  );
}
