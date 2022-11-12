import { tw } from "twind";
import { randomValue } from "../modules/ui/functions.ts";

export default function Track(props: {
  track: {
    id: string, 
    name: string, 
    preview_url: string | null, 
    cover: Array<Record<string, any>>
  }
})
{
  const px = Math.floor(randomValue(3, 5));
  const py = Math.floor(randomValue(3, 5));

  const width = "w([122px] lg:[202px])";
  const isPreview = props.track.preview_url;
  const interactible = isPreview ? 'cursor-pointer' : undefined;
  const grayScale = isPreview ? undefined : 'filter: grayscale(100%) brightness(.2);'

  return (
    <div class={tw(`group-track p-4 md:(px-${px} my-${py})`)}>
      <div class={tw('rounded-lg relative', interactible, width)} style={grayScale}>
        <img src={props.track.cover[1].url} alt="Track cover" 
          width={200} class={tw('rounded-lg group-track-hover:(opacity-0)') + " track"}
          data-preview={props.track.preview_url ?? "none"}
          data-id={props.track.id}
          data-type="image"/>
        <span class={tw(`
          absolute left-0 top-[90%] inline z-5 
          text-elipsis truncate 
          font-bold text-2xl 
          group-track-hover:(untruncate top-0 h-full) 
          transition-all bg-black`, width)}
          data-type="text">{props.track.name}</span>
      </div>
    </div>
  )
}