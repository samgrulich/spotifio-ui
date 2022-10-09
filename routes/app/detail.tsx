/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { PageProps } from "$fresh/server.ts";

import { ISnapshotInfo } from "../../modules/api/types.ts";
import Track from "../../islands/Track.tsx";


function renderTrack(id: string, theme: 0 | 1)
{
  return (
    <Track trackId={id} theme={theme}/>
  )
}

async function getChunk(snapId: string, chunkId: string)
{

}

async function getSnapInfo(host: string, snapId: string) 
{
  const url = `/api/detail/${snapId}`;
  console.log(url, typeof url)
  const resp = await fetch(url);
  const snapInfo = await resp.json() as ISnapshotInfo;
  
  return snapInfo;
}

export default function Detail(props: PageProps)
{
  const { id } = props.params;
  const params = new URL(props.url).searchParams;
  const info = JSON.parse(params.toString().replace(/&/g, '","').replace(/=/g,'":"'));
  // const snap = await getSnapInfo(props.url.host, id);

  return (
    <div class={tw(`p-10`)}>
      <img src={info.cover} alt="Playlist cover"/>
      <h1>{info.name}</h1>
      <p>{info.description}</p>
      <span>{info.creationDate}</span>
      <table class={tw(`w-full p-5 rounded-lg table-auto`)}>
        <thead> 
          <th>Songs<hr /></th>
        </thead>
        <tbody id="tracksRenderTarget">
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB" theme={1}/>
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB"/>
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB" theme={1}/>
          <Track trackId="5gF9zOYM9TmSzKHukbNjpB"/>
        </tbody>
      </table>
      {
        /**
         * foreach track in playlist:
         *  load track
         */
      } 
    </div>
  );
}