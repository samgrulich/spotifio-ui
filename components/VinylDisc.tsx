/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";


function parsePadding(padding?: [x?: number, y?: number]): {x: number, y: number}
{
  if (!padding)
    return {x: 0, y: 0};

  const x = padding[0] ?? 0;
  const y = padding[1] ?? 0;

  return {x, y}
}

export default function Disc(props: {
  size: number, 
  color?: string, 
  padding?: [x?: number, y?: number], 
  tw?: string, style?: string
})
{
  const color = props.color ? props.color + "-500" : "orange-500";

  const origSize = Math.min(64, props.size);
  const size = origSize < 17 ? origSize - origSize % 2 : origSize - origSize % 4;

  const borderSize = Math.floor(20 * props.size / 16);
  const padding = parsePadding(props.padding);

  const localStyle = apply(`
    bg-${color} w-${size} h-${size} 
    rounded-full border(solid [${borderSize}px] coolGray-900)
  `);

  const innerCircle = apply(`
    w-${24} h-${24} bg-${color} relative 
    top-1/2 left-1/2 
    -translate-x-1/2 -translate-y-1/2  
    scale-[${size/64}]
    rounded-full
  `);

  const style = apply(`
    inline-flex
    w-${size + 2 * padding.x} h-${size + 2 * padding.y} 
    px-${padding.x} py-${padding.y}`, 

    props.tw
  );

  return (
    <div class={tw(style)} style={props.style}>
      <div class={tw(localStyle, "relative")}>
        <div 
          class={tw(innerCircle)}
          style={"filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.7));"}></div>
      </div>
    </div>
  );
}
