
/** @jsx h */
import { IS_BROWSER } from "https://deno.land/x/fresh@1.0.1/runtime.ts";
import { h } from "preact";
import { tw } from "twind";

export default function Test()
{
  if(IS_BROWSER)
  {
    const audio = document.getElementById("audioPlay");
    // audio?.play();
    const song = new Audio("https://p.scdn.co/mp3-preview/50ab26cc5a4e98c4efafd988804a63e1877787e9?cid=155b87449b11484bb1a1c93a618b7a21");
    song.play();
  }

  return (
    <div>
      <audio controls={true} id="audioPlay">
        <source src="https://p.scdn.co/mp3-preview/50ab26cc5a4e98c4efafd988804a63e1877787e9?cid=155b87449b11484bb1a1c93a618b7a21" type="audio/mpeg"/>
      </audio>
    </div>
  )
}