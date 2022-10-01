/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import Playlist from "../../islands/Playlist.tsx";
import MusicControls from "../../islands/MusicControls.tsx";
import DateSelection from "../../islands/DateSelection.tsx";
import PlaylistsRenderer from "../../islands/PlaylistsRender.tsx";
import VinylDisc from "../../components/VinylDisc.tsx";

export default function Playlists()
{
  return (
    <div class={tw('group-main h-screen w-screen')}>
      <main>
        {/* <h1 class={tw('absolute top-0 left-0 translate-0.5 font(black italic) text(gray-900 4xl)')}>Spotifio</h1> */}

        <div id="renderTarget" class={tw(`grid grid-cols-4 gap-64`)}>
          <Playlist index={0}/>
          <Playlist index={1}/>
        </div>
        {/**
         *  for each playlist in user playlist
         *  show playlist
         */}

        <div class={tw(`inline interactive glass rounded-t-lg p-5 mx-auto w-full shadow(lg inner) absolute bottom-0 left-0 secondary`)}>
          <div class={tw(`centered -top-4 scale-[1.4]`)}>
            <a href="/app/detail">
              {/* <img class={tw(`inline w-20`)} src="/vinyl_player_simple.png" alt="Disc Player" /> */}
              <div class={tw('w-20 h-26 bg-gray-900 rounded-sm')}>
                {/* <img src="/vinyl_record_orange.png" alt="Music disc" class={tw('w-18 h-16 relative top-2 m-auto bg-gray-800 p-1')}/> */}
                <VinylDisc size={14} padding={[1.5, 1.5]} style={"bg-gray-700 mx-1.5 mt-1.5 rounded-sm"}/>

                <div class={tw("flex mt-3 pb-2 transtlate-y-1 py-auto space-x-1 justify-center")}>
                  <div class={tw("w-7 h-1 bg-coolGray-700 mr-3")}></div>

                  <div class={tw("w-2 h-2 bg-coolGray-700")}></div>
                  <div class={tw("w-2 h-2 bg-indigo-700")}></div>
                  {/* Play */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class={tw("w-4")} viewBox="0 0 16 16">
                    <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
                  </svg> */}

                  {/* Pause  */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" class={tw("w-4")} viewBox="0 0 16 16">
                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                  </svg> */}
                </div>
              </div>
            </a>
          </div>

          <div class={tw(`block absolute top-1/2 left-24 -translate-y-1/2`)}>
            <h1 class={tw('absolute top-0 left-0 -translate-1/2 font(black italic) text(gray-700 4xl)')}>Spotifio</h1>
          </div>

          <div class={tw(`block absolute top-1/2 right-40 -translate-x-2/3 -translate-y-1/2`)}>
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