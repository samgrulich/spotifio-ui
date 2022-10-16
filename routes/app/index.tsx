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


export const handler: Handlers<IUser> = {
  async GET(req: Request, ctxt: HandlerContext<IUser>)
  {
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
        <div id="renderTarget" class={tw(`min-h-screen grid grid-cols(2 md:3 lg:4) mx(0 md:auto) w(sm:[100%] md:[80%] lg:[1000px]) gap(x(sm:1 md:16 lg:24) y(sm:0 md:16))`)}>
          {/* <Playlist index={0}/> */}
          {/* <Playlist index={1}/>
          <Playlist index={2}/>
          <Playlist index={3}/>
          <Playlist index={4}/>
          <Playlist index={5}/>
          <Playlist index={6}/>
          <Playlist index={7}/>
          <Playlist index={8}/>
          <Playlist index={9}/>
          <Playlist index={10}/>
          <Playlist index={11}/>
          <Playlist index={12}/>
          <Playlist index={13}/>
          <Playlist index={14}/>
          <Playlist index={15}/>
          <Playlist index={16}/>
          <Playlist index={17}/>
          <Playlist index={18}/>
          <Playlist index={19}/>
          <Playlist index={20}/>
          <Playlist index={21}/>
          <Playlist index={22}/> */}
        </div>
        {/**
         *  for each playlist in user playlist
         *  show playlist
         */}

        <div style={"backdrop-filter: blur(12px);"} class={tw(`sticky interactive bg-opacity-100 p-5 h-24 w-screen shadow-lg bottom-0 float-bottom left-0 lg:(translate-x-[25%] w-2/3 rounded-t-lg)`)}>
          <div class={tw(`centered sm:-top-0 md:-top-4 md:scale-[1.4]`)}>
            <a href="/app/detail">
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
              <img class={tw(`w-10 h-10 my-auto rounded-full bg-black`)} src={data.cover[0].url} alt=" " /> 
              <span class={tw(`my-auto mx-4`)}>{data.name}</span>
              <div class={tw(`absolute p-3 top-0 interactive bg-black rounded-t-lg opacity-0 -translate-y-2/3 group-user-hover:(opacity-100 -translate-y-full transition-all duration-200 ease-in-out)`)}>
                details   
                more <br />
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