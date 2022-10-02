/** @jsx h */
import preact, { h } from "preact";
import { tw } from "twind";
import Disc from "./VinylDisc.tsx";
import { randomColor } from "../modules/ui/funcitons.ts";

export default function VinylBackground(props: {vinylAmount: number, height?: number, discSize: [min: number, max: number], style?: string, children?: preact.JSX.Element | preact.JSX.Element[]})
{
  const discSizeDelta = props.discSize[1] - props.discSize[0];
  const height = props.height ?? 20;

  const result: Array<preact.JSX.Element> = [];
  for (const index of Array(props.vinylAmount)) 
  {
    const x = Math.floor(Math.random() * 100);
    const yRandom = Math.random();
    const y = Math.floor(yRandom * height);
    const size = Math.floor(Math.random() * discSizeDelta) + props.discSize[0];
    const gradientedSize =  Math.min(0.4 +(1 - yRandom), 1);

    result.push(<Disc size={size} style={`absolute top-0 left-0 ml-[${x}%] mt-[${y}vh] scale-[${gradientedSize}] opacity-[${1 - yRandom}] -translate-1/2`} color={randomColor()}/>)
  }

  return (
    <div class={tw(`relative`, props.style ?? "")}>
      {props.children}
      <div class={tw(`absolute w-full h-[${height}vh] top-0 left-0 -z-10`)}>
        {result}
      </div>
    </div>
  )
}