/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function Track(props: {trackId: string, theme?: 0 | 1})
{
  const theme = props.theme ?? 0;

  return (
    <tr class={tw(``)}> 
      <td>
      <iframe 
        style="border-radius:12px" 
        class={tw``}
        src={`https://open.spotify.com/embed/track/${props.trackId}?utm_source=generator&theme=${theme}`}
        width="100%" 
        height="90" 
        frameBorder="0" 
        allowFullScreen={false} 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
      </iframe>
      </td>
    </tr>
  )
}