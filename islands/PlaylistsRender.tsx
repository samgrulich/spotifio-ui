/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "twind";
import { useCallback, useRef, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import DateSelection from "./DateSelection.tsx";
import Playlist from "./Playlist.tsx";
import { getApi } from "../modules/api/functions.ts";
import { ISnapshot } from "../modules/api/types.ts";

const x = "hello";
// async function requestDate(date: string)
// {
//   const response = await getApi(`versions/snapshots/${date}`);
//   const playlists: Array<ISnapshot> = await response.json();

//   return playlists;  
// }

function renderPlaylists(playlists: Array<ISnapshot>)
{
  return playlists.map(playlist => renderPlaylist(playlist));
}

function renderPlaylist(playlist: ISnapshot)
{
  return (
    <Playlist index={0} cover={playlist.cover[0].url} title={playlist.name}/>
  )
}

export default function Renderer()
{
  const changeCallback = useCallback((date: string) => {
    console.log(date)
    // either return list of playlists and render it onto the render target
  }, []);

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