/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function Paragraph(props:{children: string, offset: string})
{
  return (
    <div class={tw`inline-block`}>
      <p class={tw`intro-paragraph relative left-[${props.offset}]`}>{props.children}</p>
    </div>
  )
}