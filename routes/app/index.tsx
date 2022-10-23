/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Playlist from "../../islands/Playlist.tsx";
import MusicControls from "../../islands/MusicControls.tsx";
import PlaylistsRenderer from "../../islands/PlaylistsRender.tsx";
import Counter from "../../islands/Counter.tsx";
import Player from "../../components/VinylPlayer.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { getApi } from "../../modules/api/functions.ts";
import { IUser } from "../../modules/api/types.ts";
import { parseCookieHeader } from "../../modules/functions.ts";


export const handler: Handlers<IUser> = {
  async GET(req: Request, ctxt: HandlerContext<IUser>)
  {
    const cookies = parseCookieHeader(req.headers);
    
    if (!Object.keys(cookies).includes("userData"))
      return Response.redirect(new URL("/auth/connect", req.url));

    const res = await getApi("/users/detail", req.headers);
    if(!res.ok)
      throw Error(await res.text());

    const userData: IUser = await res.json();
    return ctxt.render(userData);
  }
}

export default function Playlists({ data }: PageProps<IUser>)
{
  return (
    <div class={tw('group-main h-screen w-screen')}>
      <main class={tw('pt(md:24) p-0')}>
        <div class={tw('min-h-screen')}>
          <div id="renderTarget" class={tw(`grid grid-cols(2 md:3 lg:4) mx(0 md:auto) w(sm:[100%] md:[80%] lg:[1000px]) gap(x(sm:1 md:16 lg:24) y(sm:0 md:16))`)}></div>
        </div>

        <div style={"backdrop-filter: blur(12px);"} class={tw(`sticky interactive bg-opacity-100 p-5 h-24 w-screen shadow-lg bottom-0 float-bottom left-0 lg:(translate-x-[25%] w-2/3 rounded-t-lg)`)}>
          <div class={tw(`centered sm:-top-0 md:-top-4 md:scale-[1.4]`)}>
            <a href="/app">
              <Player style="border(solid coolGray-900 1) shadow(md)"/>
            </a>
          </div>

          <div class={tw(`absolute sm:(top-full) left-1/2 md:(block top-1/2 left-24 -translate-y-1/2)`)}>
            <a href="/">
              <h1 class={tw('absolute top-0 left-0 -translate-x-1/2 -translate-y-[150%] md:-translate-y-1/2 font-italic text(gray-900 md:4xl sm:xl)')}>Spotifio</h1>
            </a>
          </div>

          <div class={tw(`absolute top-1/2 sm:(right-full translate-x-full) pl(1 md:0) scale([80%] md:100) md:(right-[14%] -translate-x-2/3) -translate-y-1/2`)}>
            <PlaylistsRenderer />
          </div>
          
          <div class={tw(`absolute right-0 tranlate-x-1/2`)}>
            
            <div class={tw(`group-user h-16 w-auto mr(2 md:10) relative right-0 inline-flex`)}>
              <img class={tw(`w-10 h-10 my-auto rounded-full bg-black sm:hidden md:block`)} src={data.cover[0].url} alt=" " /> 
              <span class={tw(`my-auto mx-4`)}>{data.name}</span>
              <div class={tw(`absolute p-3 top-0 interactive bg-black rounded-t-lg opacity-0 -translate-y-2/3 group-user-hover:(opacity-100 -translate-y-full transition-all duration-200 ease-in-out)`)}>
                details <br />  
                more <br />
                more <br />
              </div> 
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}