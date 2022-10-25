
/** @jsx h */
import { IS_BROWSER } from "https://deno.land/x/fresh@1.0.1/runtime.ts";
import { h } from "preact";
import { tw } from "twind";


function requestSon()
{
  console.log(body.getElementById("resource"));
}

export default function Test()
{
  if(IS_BROWSER)
  {
    const audio = document.getElementById("audioPlay");
    // audio?.play();
    const song = new Audio("");
    // song.play();
    const frame = document.getElementById("iframe");
    console.log(frame)
  }

  return (
    <div>
      <iframe style="border-radius:12px" 
        src="https://open.spotify.com/embed/track/26wLOs3ZuHJa2Ihhx6QIE6?utm_source=generator" 
        width="700" height="300" 
        frameBorder="0" 
        allowFullScreen={false} 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
        id="iframe"></iframe>
      <audio controls={true} id="audioPlay">
        <source src="https://p.scdn.co/mp3-preview/50ab26cc5a4e98c4efafd988804a63e1877787e9?cid=155b87449b11484bb1a1c93a618b7a21" type="audio/mpeg"/>
      </audio>
    </div>
  )
}