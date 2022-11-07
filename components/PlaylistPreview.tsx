/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Preview(props: {src: string, shadow?: boolean, z: number, tw?: string})
{
  const shadow = props.shadow ?? false;

  return (
    <div class={tw("inline")}>
      <img 
        src={props.src}
        alt="Playlist cover"
        class={tw(`
          w-40 rounded-2xl 
          skew-y-[3deg] relative z-${props.z}
          top-1/2 left-1/2 
          hover:(translate-x-[-49%] opacity-[0.8]) transition-all
        `, props.tw)}
        style={shadow ? `
          box-shadow: 
            10px -05px 1px black,
            10px -05px 0px 2px rgba(255, 255, 255, 0.0);
        ` : ""}
      />
    </div> 
  )
}