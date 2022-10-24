/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { randomValue } from "../modules/ui/functions.ts";

export default function Track(props: {track: {id: string, name: string, preview_url: string | null, cover: Array<Record<string, any>>}, theme?: 0 | 1})
{
  const theme = props.theme ?? 0;
  const px = Math.floor(randomValue(3, 5));
  const py = Math.floor(randomValue(3, 5));

  const width = "w([122px] lg:[202px])";

  return (
    <div class={tw(`group-track p-4 md:(px-${px} my-${py})`)}>
      <div class={tw('rounded-lg relative cursor-pointer', width)}>
        <img src={props.track.cover[1].url} alt="Track cover" 
          width={200} class={tw('rounded-lg group-track-hover:(opacity-0)')}
          data-preview={props.track.preview_url}/>
        <span class={tw(`
          absolute left-0 top-[90%] 
          z-5 text-elipsis truncate inline 
          group-track-hover:(overflow-visible whitespace-normal top-0 h-full) 
          transition-all font-bold text-2xl bg-black`, width)}>{props.track.name}</span>
      </div>
    </div>
  )
}