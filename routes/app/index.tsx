/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Playlist from "../../islands/Playlist.tsx";
import MusicControls from "../../islands/MusicControls.tsx";
import DateSelection from "../../islands/DateSelection.tsx";
import PlaylistsRenderer from "../../islands/PlaylistsRender.tsx";

export default function Playlists()
{
  return (
    <div class={tw('group-main h-screen w-screen')}>
      <main>
        <h1 class={tw('absolute top-0 left-0 translate-0.5 font(black italic) text(gray-900 4xl)')}>Spotifio</h1>

        <div id="renderTarget" class={tw(`grid grid-cols-4 gap-64`)}>
          <Playlist index={0}/>
          <Playlist index={1}/>
        </div>
        {/**
         *  for each playlist in user playlist
         *  show playlist
         */}

        <div class={tw(`inline interactive glass rounded-t-lg p-5 mx-auto w-full shadow-lg absolute bottom-0 left-0 secondary`)}>
          <div class={tw(`centered !-top-4`)}>
            <a href="/app/detail">
              <img class={tw(`inline w-20`)} src="/vinyl_player_simple.png" alt="Disc Player" />
            </a>
          </div>

          <div class={tw(`block absolute top-1/2 left-40 translate-x-2/3 -translate-y-1/2`)}>
            {/* <DateSelection setOutput={setDate}/>  */}
            <PlaylistsRenderer />
          </div>

          {/* <div class={tw(`block absolute top-1/2 left-40 translate-x-2/3 -translate-y-1/2`)}>
            <MusicControls />
          </div> */}
          
          <div class={tw(`inline float-right pr-10`)}>
            
            <div class={tw(`group-user h-16 w-auto relative right-0 inline-flex`)}>
              <img class={tw(`w-10 h-10 my-auto rounded-full bg-black`)} src="" alt=" " /> 
              <span class={tw(`my-auto mx-4`)}>Name</span>
              <div class={tw(`absolute p-3 top-0 interactive bg-black rounded-t-lg opacity-0 -translate-y-2/3 group-user-hover:(opacity-100 -translate-y-full transition-all duration-200 ease-in-out)`)}>
                details   
                more <br />
                more <br />
                more <br />
              </div> 
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
}