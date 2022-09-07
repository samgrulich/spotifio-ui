/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Track from "./track.tsx";

interface PlaylistProps
{
  showDetail: boolean;
}

export default function Playlist({showDetail}: PlaylistProps)
{
  if (showDetail)
    return (
      <div>
        {
          /**
           * foreach track in playlist:
           *  load track
           */
        } 
        <div>
          <Track />
        </div> 
      </div>
    )

  return (
    <div>
      <div>
        <img src="" alt="Playlist Cover" />
      </div>
      <img src="" alt="Music disc" />
    </div>
  )
}