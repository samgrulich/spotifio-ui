/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Disc from "./VinylDisc.tsx";

export default function Player(props: {style?: string})
{
  return (
    <div class={tw('w-20 h-26 bg-gray-900 rounded-sm', props.style)}>
      <Disc size={14} padding={[1.5, 1.5]} tw={"bg-gray-700 mx-1.5 mt-1.5 rounded-sm"}/>

      <div class={tw("flex mt-3 pb-2 transtlate-y-1 py-auto space-x-1 justify-center")}>
        <div class={tw("w-7 h-1 bg-coolGray-700 mr-3")}></div>

        <div class={tw("w-2 h-2 bg-coolGray-700")}></div>
        <div class={tw("w-2 h-2 bg-indigo-700")}></div>
      </div>
    </div>
  );
}