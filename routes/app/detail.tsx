/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { PageProps, RouteConfig } from "$fresh/server.ts";

import Track from "../../islands/Track.tsx";
import Scroller from "../../islands/InfiniteScroller.tsx";
import { parseParams } from "../../modules/functions.ts";


export const config: RouteConfig = {
  routeOverride: "/app/detail*"
}

export default function Detail(props: PageProps)
{
  const params = new URL(props.url).searchParams;
  const info = parseParams(params);

  const date = new Date(info.creationDate);
  // const snap = await getSnapInfo(props.url.host, id);

  return (
    <div class={tw(`p-10`)}>
      <div class={tw('flex md:space-x-10 w-10/12 mx-auto mt-10 sm:flex-wrap md:flex-nowrap')}>
        <div class={tw('sm:mb-10')}>
          <img src={info.cover} alt="Playlist cover" class={tw("w-60 rounded-lg")}/>
        </div>
        <div class={tw('flex flex-col')}>
          <h1 class={tw('text(3xl md:6xl) font-bold')}>{info.name}</h1>
          <span class={tw('text-gray-900 ml-4 mt-2 mb-3')}>{date.toLocaleDateString()}</span>
          <p class={tw('ml-3')}>{info.description}</p>
        </div>
      </div>
      <table class={tw(`w-full p-5 rounded-lg sm:mt-20 md:mt-40 absolute left-0 translate-x-0 lg:(max-w-[900px] left-1/2 -translate-x-1/2)`)}>
        <thead> 
          <th>Songs<hr /></th>
        </thead>
        <tbody id="tracksRenderTarget">
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB" theme={1}/>
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB"/>
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB" theme={1}/>
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB"/>
        </tbody>
      </table>
      <Scroller hash={info.hash}/>
      <script src="https://sdk.scdn.co/spotify-player.js"></script>
    </div>
  );
}