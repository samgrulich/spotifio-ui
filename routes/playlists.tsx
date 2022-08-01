/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Menu from "../components/Menu.tsx";

const trackerStyle = apply('w-1/2 m-3 p-3 bg-black h-96')

export default function Playlists()
{
  /**
   * User can manipulate with playlists in here 
   *  - all of the playlists will be shown in a collage 
   *   the picture of playlist with closer info under 
   *  
   *  :on playlist click
   *    redirect to the playlist details page
   */

  return (
    <div class={tw('')}>
      <Menu />
      
      <main>
        <h1>Playlists</h1>
        <p>Track your playlists @here!</p>
        {/**
         *  for each playlist in user playlist
         *  show playlist
         * 
         */}
        <div class={tw('container flex')} id='trackers'>
          <div class={tw(trackerStyle, 'bg-blue-800')} id='untracked'>adsff</div>
          <div class={tw(trackerStyle)} id='tracked'>adfa</div>
        </div>
      </main>
    </div>
  );
}