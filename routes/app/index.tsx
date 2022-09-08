/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Playlist from "../../islands/playlist.tsx";
import MusicControls from "../../islands/musicControls.tsx";

export default function Playlists()
{
  return (
    <div class={tw('group-main h-screen w-screen')}>
      <main>
        <div class={tw(`grid grid-cols-4 gap-64`)}>
          <Playlist index={0}/>
          <Playlist index={1}/>
        </div>
        {/**
         *  for each playlist in user playlist
         *  show playlist
         */}
      
        <div class={tw(`inline interactive glass rounded-t-lg p-5 mx-auto w-full shadow-lg absolute bottom-0 left-0 secondary`)}>
          <div class={tw(`centered !-top-4`)}>
            <img class={tw(`inline w-20`)} src="/vinyl_player_simple.png" alt="Disc Player" />
          </div>

          <MusicControls />
          
          <div class={tw(`inline float-right pr-10`)}>
            
            <div class={tw(`group-user h-16 w-auto relative right-0 inline-flex`)}>
              <img class={tw(`w-10 h-10 my-auto rounded-full bg-black`)} src="" alt=" " /> 
              <span class={tw(`my-auto mx-4`)}>Name</span>
              <div class={tw(`absolute p-3 top-0 interactive glass rounded-t-lg opacity-0 -translate-y-2/3 group-user-hover:(opacity-100 -translate-y-full transition-all duration-200 ease-in-out)`)}>
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