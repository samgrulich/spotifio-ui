/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext, PageProps } from "$fresh/server.ts";
import { Credentials } from "../modules/types.ts";
import { splitCookies } from "../modules/functions.ts";
import Menu from "../components/Menu.tsx";
import { dbClient, ExecuteStatementCommand } from "../modules/db/init.ts";

export const handler: Handlers = {
  async GET(req: Request, ctx: HandlerContext) {
    const rawCookies = req.headers.get("cookie");
    
    if (typeof rawCookies != "undefined")
    {
      const cookies = splitCookies(rawCookies || ""); 
      const credentials = {
        userID: cookies["userID"]
      };
      return await ctx.render(credentials);
    }

    return await ctx.render();
  },
};

export default function Home( { data }: PageProps<Credentials | null> ) {
  const userID = data?.userID;

  return (
    <div class={tw('')}>
      <Menu userID={userID}/>

      <main>
        <h1>Home</h1>
        <p>Welcome! Spotfio lets you track your spotify playlists and listen to music with friends</p>
      </main>

      {/* <Redirect path="./music"/> */}
    </div>
  );
}
