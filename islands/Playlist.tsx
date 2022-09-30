/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Track from "./Track.tsx";

interface PlaylistProps
{
  index: number;
}

export default function Playlist({index}: PlaylistProps)
{
  return (
    <div class={tw(`h-44 w-44 relative bg-gray-700 rounded-md transition-all delay-${index * 100} primary iterable`)}>
       <div class={tw(`h-40 w-40 absolute left-1/3 translate-y-2`)} style="z-index: -1">
        <img src="vinyl_record_orange.png" alt="Music disc" />
      </div>
      <div class={tw(`absolute animate-pulse`)}>
        <img class={tw(`h-44 w-44 bg-gray-900 rounded-lg text(xs gray-900)`)} src="" alt="Playlist Cover" />
      </div>
    </div>
  )
}