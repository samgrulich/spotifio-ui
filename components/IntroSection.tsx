import { tw } from "twind";


function parseColor(color?: string, fallback="gray"): string
{
  return color == "" ? fallback : color ?? fallback;
}

export default function Section(props: {
  dividerColor?: string, 
  dividertw?: string, 
  tw?: string, 
  id?: string, 
  bg?:string, 
  children?: any
})
{
  const dividerColor = "bg-" + parseColor(props.dividerColor) + "-600";
  const bgColor = "bg-" + parseColor(props.bg, "none");

  return (
    <div class={tw(bgColor)}>
      <div class={tw('intro-divider', dividerColor, props.dividertw)}></div>
      <div class={tw('pb-20', props.tw)} id={props.id}>
        {props.children}
      </div>
    </div>
  );
}