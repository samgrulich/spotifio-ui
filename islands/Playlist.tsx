/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

import Disc from "../components/VinylDisc.tsx";
import Track from "./Track.tsx";
import { randomColor } from "../modules/ui/funcitons.ts";

interface PlaylistProps
{
  index: number;
}


export default function Playlist({index}: PlaylistProps)
{
  const colorId = randomColor();

  return (
    <div class={tw(`h-44 w-44 sm:(scale-[.8]) md:(scale-[.9]) lg:(scale-[1]) relative rounded-full transition-all delay-[${index * 100}ms] primary iterable`)}>
      <div class={tw(`h-40 w-40 absolute left-1/3 translate-y-2`)} style="z-index: -1">
        <Disc size={40}/>
      </div>
      <div class={tw(`absolute`)}>
        <img class={tw(`h-44 w-44 bg-${colorId}-400 rounded-lg text(xs gray-900)`)} src="" alt="Playlist Cover" />
      </div>
    </div>
  )
}