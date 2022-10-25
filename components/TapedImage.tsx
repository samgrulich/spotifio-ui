/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Image(props: {
  src: string, 
  alt: string, 
  width?: string, 
  imgtw?: string, tw?: string, 
  tapeOffsetY?: number})
{
  const tapeRotation = Math.floor(Math.random() * 60) - 30;

  return (
    <div class={tw(props.tw, `w-[${props.width}]`)}>
      <img src="/tape-piece.png" alt="Tape piece" class={tw(`rotate-[${tapeRotation}deg] z-10 relative w-[5rem] translate-y-[${props.tapeOffsetY ?? 0}px] left-1/2`)}/>
      <img src={props.src} alt={props.alt} width={props.width ?? "100%"} class={tw(props.imgtw)}/>
    </div>
  )
}