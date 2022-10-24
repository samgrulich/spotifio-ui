/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { randomValue } from "../modules/ui/functions.ts";

export default function Track(props: {track: {id: string, name: string, preview_url: string | null, cover: Array<Record<string, any>>}, theme?: 0 | 1})
{
  const theme = props.theme ?? 0;
  const px = Math.floor(randomValue(0, 12));
  const py = Math.floor(randomValue(0, 6));

  const width = "w([120px] lg:[200px])";

  return (
    <tr class={tw(``)}> 
      <td>
        <div class={tw(`lg:(relative left-1/2) p-4 md:(px-${px} my-${py})`)}>
          <div class={tw('rounded-lg relative', width)}>
            <img src={props.track.cover[1].url} alt="Track cover" width={200} class={tw('rounded-lg')}/>
            <span class={tw('absolute left-0 top-[90%] z-5 truncate text-elipsis font-bold text-2xl bg-black', width)}>{props.track.name}</span>
          </div>
        </div>
      </td>
    </tr>
  )
}