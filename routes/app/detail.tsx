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
      <div class={tw('flex md:space-x-10 w-10/12 mx-auto mt-10 sm:flex-wrap md:flex-nowrap mb(20 lg:40)')}>
        <div class={tw('sm:mb-10')}>
          <img src={info.cover} alt="Playlist cover" class={tw("w-60 rounded-lg")}/>
        </div>
        <div class={tw('flex flex-col')}>
          <h1 class={tw('text(3xl md:6xl) font-bold')}>{info.name}</h1>
          <span class={tw('text-gray-900 ml-4 mt-2 mb-3')}>{date.toLocaleDateString()}</span>
          <p class={tw('ml-3')}>{info.description}</p>
        </div>
      </div>
      
      {/* <h1 class={tw('relative left-1/2 -translate-x-1/2 text-2xl')}>Songs</h1>  */}
      <div id="tracksRenderTarget" class={tw('flex w-[120%] -translate-x-[10%] h-full flex-wrap')}></div>
      <Scroller hash={info.hash}/>
    </div>
  );
}