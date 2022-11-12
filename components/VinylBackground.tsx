import preact from "preact";
import { tw } from "twind";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Disc from "./VinylDisc.tsx";
import { randomColor } from "../modules/ui/functions.ts";

export default function VinylBackground(props: {
  vinylAmount: number, height?: number, 
  discSize: [min: number, max: number], 
  tw?: string, disctw?: string, 
  position?: string,
  z?: number,
  children?: preact.JSX.Element | preact.JSX.Element[]
})
{
  const discSizeDelta = props.discSize[1] - props.discSize[0];
  const height = props.height ?? 20;
  const position = props.position ?? "absolute";
  const zIndex = -10;

  const result: Array<preact.JSX.Element> = [];
  for (const index of Array(props.vinylAmount)) 
  {
    const x = Math.random() * 100;
    const yRandom = Math.random();
    const y = Math.floor(yRandom * height);
    const size = Math.floor(Math.random() * discSizeDelta) + props.discSize[0];
    const gradientedSize =  Math.min(0.4 +(1 - yRandom), 1);

    result.push(<Disc size={size} 
      tw={`
      absolute
      top-[${y}vh] left-[${x}%]
      scale-[${gradientedSize}] 
      ${props.disctw ?? ""}`} 
      
      style={`filter: brightness(${(1 - yRandom) * 0.8});`} 
      color={randomColor()}
    />)
  }

  return (
    <div class={tw(`relative`, props.tw ?? "")}>
      {props.children}
      <div class={tw(position, `w-full h-[${height}vh] top-0 left-0 z-[${zIndex}]`)}>
        {result}
      </div>
    </div>
  )
}