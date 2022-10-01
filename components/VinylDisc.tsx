/** @jsx h */
import { h } from "preact";
import { tw, apply, Directive, CSSRules } from "twind";


function parsePadding(padding?: [x?: number, y?: number]): {x: number, y: number}
{
  if (!padding)
    return {x: 0, y: 0};

  const x = padding[0] ?? 0;
  const y = padding[1] ?? 0;

  return {x, y}
}

export default function VinylDisc(props: {size: number, color?: string, padding?: [x?: number, y?: number], style?: string})
{
  const color = props.color ?? "orange-500";
  const size = Math.min(64, props.size);
  const borderSize = Math.floor(20 * props.size / 16);
  const padding = parsePadding(props.padding);
  const localStyle = (`bg-${color} w-${size} h-${size} rounded-full border(solid [${borderSize}px] black)`);
  const style = [
    "inline-flex", 
    `w-${size + 2 * padding.x} h-${size + 2 * padding.y} px-${padding.x} py-${padding.y}`, 
    props.style
  ];

  return (
    <div class={tw(...style)}>
      <div class={tw(localStyle)}></div>
    </div>
  );
}
