/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Playlist from "../../islands/playlist.tsx";

const trackerStyle = apply('w-1/2 m-3 p-3 bg-black h-96')

export default function Playlists()
{
  return (
    <div class={tw('h-screen w-screen')}>
      <main> 
        <Playlist showDetail={false}/>
        {/**
         *  for each playlist in user playlist
         *  show playlist
         */}
      
        <div class={tw(`inline bg-gray-800 rounded-t-lg p-5 mx-auto w-full min-h-80 shadow-lg absolute bottom-0 left-0 z-10`)}>
          <div class={tw(`centered top-0`)}>
            <img class={tw(`inline w-96`)} src="" alt="Disc Player" />
          </div>
          <div class={tw(`group inline float-right pr-10`)}>
            <div class={tw(`h-16 w-auto relative right-0 inline-flex`)}>
              <img class={tw(`w-10 h-10 my-auto rounded-full bg-black`)} src="" alt=" " /> 
              <span class={tw(`my-auto mx-4`)}>Name</span>
            </div>
            
            <div class={tw(`absolute p-3 top-5 rounded-t-lg bg-gray-800 opacity-0 -translate-y-2/3 group-hover:(opacity-100 -translate-y-full transition-all duration-200 ease-in-out)`)}>
              details   
              more <br />
              more <br />
              more <br />
              more <br />
              more <br />
              more <br />
            </div> 
          </div>
        </div>
      </main>
    </div>
  );
}