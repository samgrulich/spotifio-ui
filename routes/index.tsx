/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext, PageProps } from "$fresh/server.ts";
import { Credentials } from "../modules/types.ts";
import { splitCookies } from "../modules/functions.ts";
import Menu from "../components/Menu.tsx";
import Redirect from "../islands/Test.tsx";

export const handler: Handlers = {
  GET(req: Request, ctx: HandlerContext) {
    const rawCookies = req.headers.get("cookie");
    const cookies = splitCookies(rawCookies); 
    const credentials = {
      sessionID: cookies["PHPSESSID"],
    };

    return ctx.render(credentials);
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
