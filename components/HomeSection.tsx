/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function Section(props: {
  header: string, 
  img: {src: string, alt: string, width?: number}, 
  textRight?: boolean,
  children: string | h.JSX.Element | h.JSX.Element[]
}) 
{
  const imgW = props.img.width ?? 200;
  const img = (
    <div>
      <img src={props.img.src} alt={props.img.alt} class={tw(`w-[100px] md:w-[${imgW}px]`)}/>
    </div>
  )

  const contents = typeof props.children == "string" ? <p>{props.children}</p> : props.children;
  const left = props.textRight ? img : undefined;

  return (
    <div class={tw("section-home-intro")}>
      {left}
      <div class={tw("section-text")}>
        <h3 class={tw("section-header")}>{props.header}</h3>
        <div>
          {contents}
        </div>
      </div>
      {props.textRight ? undefined : img}
    </div>
  )
}