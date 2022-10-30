/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { apply, tw } from "@twind";
import { IS_BROWSER } from "$fresh/runtime.ts";


const style = apply("stroke-2")

const play = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={tw(style) + "bi bi-play"} viewBox="0 0 16 16">
    <path class={tw(style)} d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
  </svg>
);

const pause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={tw(style) + "bi bi-pause"} viewBox="0 0 16 16">
    <path class={tw(style)} d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
  </svg>
);

async function parsePreview(id: string)
{
  const resp = await fetch(`https://open.spotify.com/embed/track/${id}`, {
    headers: {
    }
  });
  const body = new DOMParser().parseFromString(await resp.text(), "text/html");

  console.log(body.getElementById("resource"));
}

function loadFirstPreview()
{
  const tracks = document.getElementsByClassName("track");

  for (let i = 0; i < tracks.length; i++)
  {
    const track = tracks[i] as HTMLElement;
    const preview = track.dataset["preview"]

    if (preview != "none")
      return preview;
  }

  return "https://p.scdn.co/mp3-preview/c295f9924d7c2ff45afa2d568efb399b8fbcb459?cid=59fb6083fdab410aa0e427b2a407f9e4";
}


export default function Player()
{
  if (!IS_BROWSER)
    return ( <div></div> );

  const audio = new Audio(loadFirstPreview());
  const [paused, setPaused] = useState(false);
  audio.onpause = () => setPaused(false);
  const toggle = () => {
    if (audio.paused)
      audio.play();
    else
      audio.pause();
  };

  document.addEventListener("click", (e) => {
    let element = e.target as HTMLElement;
    let preview = element.dataset["preview"];

    if ( typeof preview != "string" && element.dataset["type"] != "text" )
    {
      return;
    }

    else if (element.dataset["type"] == "text")
    {
      const sibling = element.previousElementSibling as HTMLElement;
      element = sibling;
      preview = element.dataset["preview"];
    }

    if (preview == "none")
    {
      console.log("preview not found");
      return;
    }

    audio.src = element.dataset["preview"] ?? "";
    audio.play();
  });

  return (
    <div></div>
  )
}