/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

import Disc from "../components/VinylDisc.tsx";
import Track from "./Track.tsx";
import { randomColor } from "../modules/ui/funcitons.ts";
import { ISnapshotInfo } from "../modules/api/types.ts";


export default function Playlist(props: {index?: number, id: string, info: ISnapshotInfo})
{
  const colorId = randomColor();
  const index = props.index ?? 0;
  const cover = props.info.cover[0].url ?? "";
  const bg = "bg-" + colorId + "-400";

  const info = {...props.info, cover};
  const infoParams = new URLSearchParams(info);

  return (
    <div class={tw(`h-44 w-44 sm:(scale-[.8]) md:(scale-[.9]) lg:(scale-[1]) relative rounded-full transition-all delay-[${index * 100}ms] primary iterable`)}>
      <a href={`/app/detail/${props.id}?${infoParams.toString()}`}>
        <div class={tw(`h-40 w-40 absolute left-1/3 translate-y-2`)} style="z-index: -1">                  
          <Disc size={40} color={colorId}/>
        </div>
        <div class={tw(`absolute rounded-2xl`, bg)}>
          <img class={tw(`h-44 w-44 rounded-lg text(xs gray-900)`)} src={cover} alt="Playlist cover"/>
        </div>
      </a>
    </div>
  )
}