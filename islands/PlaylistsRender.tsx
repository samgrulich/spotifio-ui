/** @jsx h */
import { h, render } from "preact";
import { tw } from "twind";
import { useCallback, useRef, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import DateSelection from "./DateSelection.tsx";
import Playlist from "./Playlist.tsx";
import { getApi } from "../modules/api/functions.ts";
import { ISnapshot } from "../modules/api/types.ts";

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

function renderPlaylist(playlist: ISnapshot)
{
  return (
    <Playlist index={0} cover={playlist.cover[0].url} title={playlist.name}/>
  )
}

export default function Renderer()
{
  const changeCallback = useCallback(async (renderTarget: HTMLElement, date: string) => {
    const playlists = await requestDate(date);
    const playlistElements = renderPlaylists(playlists);

    renderTarget.innerHTML = "";
    playlistElements.forEach(element => render(element, renderTarget));
    // either return list of playlists and render it onto the render target
  }, []);

  if (IS_BROWSER)
  {
    const renderTarget = document.getElementById("renderTarget");

    if(!renderTarget)
      return (
        <DateSelection callback={() => {}}/>
      )

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