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
    const strCookies = rawCookies || `sessionID=${crypto.randomUUID()}`;

    const cookies = splitCookies(strCookies); 
    const credentials = {
      sessionID: cookies["sessionID"],
    };

    const resp = await ctx.render(credentials);
    if (rawCookies != strCookies)
    {
      // Create session in DB
      

      resp.headers.set("Set-Cookie", `${strCookies}; SameSite=Strict; Max-Age=${604800}`);
    }

    return resp;
  },
};

export default function Home( props: PageProps<Credentials> ) {
  return (
    <div class={tw('')}>
      <Menu sessionID={props.data.sessionID}/>

      <main>
        <h1>Home</h1>
        <p>Welcome! Spotfio lets you track your spotify playlists and listen to music with friends</p>
      </main>

      {/* <Redirect path="./music"/> */}
    </div>
  );
}
