/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

import Disc from "../components/VinylDisc.tsx";
import Track from "./Track.tsx";
import { randomColor } from "../modules/ui/funcitons.ts";


export default function Playlist(props: {index?: number, cover?: string, title?: string})
{
  const colorId = randomColor();
  const index = props.index ?? 0;
  const cover = props.cover ?? "";
  const title = props.title ?? "Playlist Cover";
  const bg = "bg-" + colorId + "-400"

  return (
    <div class={tw(`h-44 w-44 sm:(scale-[.8]) md:(scale-[.9]) lg:(scale-[1]) relative rounded-full transition-all delay-[${index * 100}ms] primary iterable`)}>
      <div class={tw(`h-40 w-40 absolute left-1/3 translate-y-2`)} style="z-index: -1">
        <Disc size={40} color={colorId}/>
      </div>
      <div class={tw(`absolute`)}>
        <img class={tw(`h-44 w-44 rounded-lg text(xs gray-900)`, bg)} src={cover} alt={title}/>
      </div>
    </div>
  )
}