/** @jsx h */
import { h, render } from "preact";
import { useCallback } from "preact/hooks";
import { tw } from "twind";
import { IS_BROWSER } from "$fresh/runtime.ts";

import Track from "./Track.tsx";
import { IChunk } from "../modules/api/types.ts"


function renderTrack(id: string, theme: 0 | 1)
{
  return (
    <Track trackId={id} theme={theme}/>
  )
}

function renderTracks(tracks: Array<string>)
{
  return tracks.map((trackId, index) => renderTrack(trackId, index % 2 as 0 | 1))
}

async function renderChunk(renderTarget: HTMLElement, snapId: string, chunkId: string)
{
  const chunkData = await getChunk(snapId, chunkId);
  const tracksElements = renderTracks(chunkData.data?.tracks ?? []);

  render(tracksElements, renderTarget);
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

  console.log(props.hash);
  const tracksRenderTarget = document.getElementById("tracksRenderTarget")
  
  if (!tracksRenderTarget)
    return;
  
  const snapInfo = await getSnapInfo(props.hash);
  // renderChunk(tracksRenderTarget, props.hash, snapInfo.chunks.lastChunk);
}