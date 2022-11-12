import { tw } from "twind";

export default function Paragraph(props:{children: string, offset: string})
{
  return (
    <div class="inline-block py-3 relative md:left-1/4">
      <p class={tw`intro-paragraph relative left-[${props.offset}]`}>{props.children}</p>
    </div>
  )
}