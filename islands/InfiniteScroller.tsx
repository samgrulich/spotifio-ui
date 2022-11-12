// deno-lint-ignore-file no-explicit-any
import { render } from "preact";
import { useState, StateUpdater, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import Track from "./Track.tsx";
import { IChunk } from "../modules/api/types.ts"


function renderTrack(track: {id: string, name: string, preview_url: string | null, cover: Array<Record<string, any>>}, theme: 0 | 1)
{
  return (
    <Track track={track}/>
  )
}

function renderTracks(tracks: Array<any>)
{
  return tracks.map((track, index) => renderTrack(track, index % 2 as 0 | 1))
}

async function renderChunk(
  renderTarget: HTMLElement, tracks: Array<h.JSX.Element>, 
  snapId: string, chunkId: string,
  setTracks: StateUpdater<h.JSX.Element[]>,
  setNextChunk: StateUpdater<string>
)
{
  const chunkData = await getChunk(snapId, chunkId) as any;
  const tracksElements = renderTracks(chunkData.tracks ?? []);

  const allTracks = tracks.concat(tracksElements);

  render(allTracks, renderTarget);
  setTracks(allTracks);
  setNextChunk(chunkData.chunk.previousChunk);
  
  if(allTracks.length < 20)
    renderChunk(renderTarget, tracks, snapId, chunkData.chunk.previousChunk, setTracks, setNextChunk);
}

async function initSnap(
  renderTarget: HTMLElement, tracks: Array<h.JSX.Element>, snapId: string, 
  setTracks: StateUpdater<h.JSX.Element[]>,
  setNextChunk: StateUpdater<string>
)
{
  const snapInfo = await getSnapInfo(snapId);

  renderChunk(renderTarget, tracks, snapId, snapInfo.chunks.lastChunk, setTracks, setNextChunk);
}

async function getChunk(snapId: string, chunkId: string)
{
  const resp = await fetch(`/api/chunk/${snapId}/${chunkId}`);
  const chunkInfo = await resp.json() as IChunk;
  
  return chunkInfo;
}

async function getSnapInfo(snapId: string) 
{
  const resp = await fetch(`/api/detail/${snapId}`);
  const snapInfo = await resp.json() as Record<string, any>;
 
  return snapInfo;
}

export default function Scroller(props: {hash: string})
{
  if (!IS_BROWSER)
    return (<div></div>);

  const tracksRenderTarget = document.getElementById("tracksRenderTarget")
  const chunksRequested: Array<string> = [];
  const [tracks, setTracks] = useState(Array<preact.h.JSX.Element>);
  const [nextChunk, setNextChunk] = useState("");
  
  if (!tracksRenderTarget)
    return (<div></div>);
 
  useEffect(() => {
    initSnap(tracksRenderTarget, tracks, props.hash, setTracks, setNextChunk) 
  }, []);

  window.onscroll = (e) => {
    const rect = document.body.getBoundingClientRect();
    
    if (rect.y - window.innerHeight <= -rect.height + 300)
    {
      if (nextChunk == "0")
      {
        console.log("finished loading")
        return;
      }

      if (chunksRequested.includes(nextChunk))
        return;

      chunksRequested.push(nextChunk);

      console.log("loading: ", nextChunk);
      renderChunk(tracksRenderTarget, tracks, props.hash, nextChunk, setTracks, setNextChunk);
    }
  }

  return (<div></div>);
}