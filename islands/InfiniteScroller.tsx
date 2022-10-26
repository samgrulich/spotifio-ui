/** @jsx h */
import { h, render } from "preact";
import { useCallback, useState } from "preact/hooks";
import { tw } from "twind";
import { IS_BROWSER } from "$fresh/runtime.ts";

import Track from "./Track.tsx";
import { IChunk } from "../modules/api/types.ts"
import { shallowRender } from "https://esm.sh/v89/preact-render-to-string@5.2.0/X-ZC9wcmVhY3RAMTAuOC4y/src/index.d.ts";


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

async function renderChunk(renderTarget: HTMLElement, tracks: Array<h.JSX.Element>, snapId: string, chunkId: string)
{
  const chunkData = await getChunk(snapId, chunkId) as any;
  const tracksElements = renderTracks(chunkData.tracks ?? []);

  const allTracks = tracks.concat(tracksElements);

  render(allTracks, renderTarget);
  return {chunkData, allTracks};
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

export default async function Scroller(props: {hash: string})
{
  if (!IS_BROWSER)
    return <div></div>;

  const tracksRenderTarget = document.getElementById("tracksRenderTarget")
  const chunksRequested: Array<string> = [];
  let tracks: Array<h.JSX.Element> = [];
  
  if (!tracksRenderTarget)
    return;
  
  const snapInfo = await getSnapInfo(props.hash);
  
  const {chunkData, allTracks} = await renderChunk(tracksRenderTarget, tracks, props.hash, snapInfo.chunks.lastChunk);
  let nextChunk = chunkData.chunk.previousChunk;
  tracks = allTracks;

  if(allTracks.length < 20)
  {
    const {chunkData, allTracks} = await renderChunk(tracksRenderTarget, tracks, props.hash, nextChunk);
    nextChunk = chunkData.chunk.previousChunk;
    tracks = allTracks;
  }

  window.onscroll = async (e) => {
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
      const {chunkData, allTracks} = await renderChunk(tracksRenderTarget, tracks, props.hash, nextChunk);
      nextChunk = chunkData.chunk.previousChunk;
      tracks = allTracks;
    }
  }
}