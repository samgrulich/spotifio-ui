/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Playlist from "../../islands/playlist.tsx";

const trackerStyle = apply('w-1/2 m-3 p-3 bg-black h-96')

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
      
        <div class={tw(`inline group-main-active:(-bottom-0) delay-200 interactive glass rounded-t-lg p-5 mx-auto w-full shadow-lg absolute -bottom-full left-0 transition-all`)}>
          <div class={tw(`centered top-0`)}>
            <img class={tw(`inline w-96`)} src="" alt="Disc Player" />
          </div>
          <div class={tw(`inline float-right pr-10`)}>
            <div class={tw(`centered`)}>
              <div class={tw(`w-full relative left-1/2`)}>Player</div> 
              <div class={tw(`flex space-x-1`)}>
                <div>Love it</div> 
                <div>Back</div>
                <div>Play/Pause</div>
                <div>Skip</div>
                <div>Like</div>
              </div> 
            </div> 
            
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