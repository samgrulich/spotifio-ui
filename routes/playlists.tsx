/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Menu from "../components/Menu.tsx";

import { DB } from "sqlite3";

const trackerStyle = apply('w-1/2 m-3 p-3 bg-black h-96')

export default function Playlists()
{
  return (
    <div class={tw('')}>
      <Menu />
      
      <main>
        <h1>Playlists</h1>
        <p>Track your playlists @here!</p>
        {/* playlists tracking */}
        <div class={tw('container flex')} id='trackers'>
          <div class={tw(trackerStyle, 'bg-blue-800')} id='untracked'>adsff</div>
          <div class={tw(trackerStyle)} id='tracked'>adfa</div>
        </div>
      </main>
    </div>
  );
}