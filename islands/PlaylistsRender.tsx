/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { useCallback, useRef, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import DateSelection from "./DateSelection.tsx";
import Playlist from "./Playlist.tsx";

export default function PlaylistsRenderer(props: {})
{
  const changeCallback = (date: string) => {
    console.log(date);
    // either return list of playlists and render it onto the render target
  };

  if (IS_BROWSER)
  {
    const renterTarget = document.getElementById("renderTarget");

    return (
      <div>
        <DateSelection callback={changeCallback}/>
      </div>
    );
  }

  return (
    <div>
      <DateSelection callback={changeCallback}/>
    </div>
  );
}