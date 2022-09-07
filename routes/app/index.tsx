/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Playlist from "../../islands/playlist.tsx";

const trackerStyle = apply('w-1/2 m-3 p-3 bg-black h-96')

export default function Playlists()
{
  return (
    <div class={tw('')}>
      <main> 
        <Playlist showDetail={false}/>
        {/**
         *  for each playlist in user playlist
         *  show playlist
         */}
      
        <div>
         <div><img src="" alt="Disc Player" /></div>
         <div><img src="" alt="Profile" />name</div>
        </div>
      </main>
    </div>
  );
}