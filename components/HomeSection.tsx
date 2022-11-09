/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";


export default function Section(props: {
  header: string, 
  img: {src: string, alt: string}, 
  textRight?: boolean,
  children: string | h.JSX.Element | h.JSX.Element[]
}) 
{
  const img = (
    <div>
      <img src={props.img.src} alt={props.img.alt} class={tw("w-[100px] md:w-[200px]")}/>
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