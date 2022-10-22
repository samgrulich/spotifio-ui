/** @jsx h */
import { h, render } from "preact";
import { tw } from "twind";
import { useCallback, useRef, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import DateSelection from "./DateSelection.tsx";
import Playlist from "./Playlist.tsx";
import { getApi } from "../modules/api/functions.ts";
import { ISnapshot, ISnapshotInfo } from "../modules/api/types.ts";
import { getToday } from "../modules/ui/funcitons.ts";

async function requestDate(date: string)
{
  const response = await fetch(`/api/date/${date}`);
  const playlists: Array<ISnapshot> = await response.json();

  return playlists;  
}


function renderPlaylists(playlists: Array<ISnapshot>)
{
  return playlists.map(playlist => renderPlaylist(playlist));
}

function renderPlaylist(snap: ISnapshot)
{
  return (
    <Playlist index={0} id={snap.hash} info={snap}/>
  )
}

export default function Renderer()
{
  const changeCallback = useCallback(async (renderTarget: HTMLElement, date: string) => {
    const playlists = await requestDate(date);
    const playlistElements = renderPlaylists(playlists);

    renderTarget.innerHTML = "";
    // render "Sorry, but I found no snapssnapssnapssnapssnapssnapssnapssnapssnaps!"
    // const elemes = playlistElements.map(elem => [elem, elem, elem, elem, elem]).flat();
    render(playlistElements, renderTarget);
  }, []);

  if (IS_BROWSER)
  {
    const renderTarget = document.getElementById("renderTarget");

    if(!renderTarget)
      return (
        <div>
          <DateSelection callback={() => {}}/>
          Render area not found
        </div>
      )

    changeCallback(renderTarget, getToday());
    return (
      <div>
        <DateSelection callback={(date: string) => {changeCallback(renderTarget, date)}}/>
      </div>
    );
  }

  return (
    <div>
      <DateSelection callback={() => {}}/>
    </div>
  );
}