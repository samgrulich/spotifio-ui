/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";
import Disc from "../components/VinylDisc.tsx";
import Preview from "../components/PlaylistPreview.tsx";
import VinylBackground from "../components/VinylBackground.tsx";

export default function HomePage()
{
  const style = {
    bubble: apply(`
      absoluted 
      -translate-y-[70%] -translate-x-1/4 -z-10 
      background rounded-full
      w(36 sm:40 md:64) h(36 sm:40 md:64)
    `),
  }

  return (
    <div>
      <header class={tw("p-2")}>
        <div class={tw("inline-flex")}>
          <div class={tw(style.bubble, "z-10")}></div>
          <span class={tw("title z-20")}>Spotifio</span>
        </div>
        <button class={tw("button-home text-black float-right")}>Join</button>
      </header>
      <main>
        <section class={tw("section h-[100vh] relative bg-gradient-to-b from-black to-coolGray-900")}>
          <div class={tw("center -translate-1/2 w-[60%]")}>
            <div class={tw("flex space-x-12")}>
            <div>
            <h1 class={tw("text-6xl")}>Watch your playlists evolve</h1>
            <p class={tw("w-0.8 text-xl")}>
              We look at the music you listen to and 
              then make you a library, 
              so you can see what you were listening to before.
            </p>
            </div>
            <div class={tw("inline w-1/2")}>
            <div class={tw("grid grid-cols-2 gap-2")}>
              <Preview src="playlists/cover_vibe.jpeg" shadow z={10}/>
              <Preview src="playlists/cover_cesi.jpeg" shadow z={20}/>
              <Preview src="playlists/cover_zone.jpeg" shadow z={ 0}/>
              <Preview src="playlists/cover_vibe.jpeg" shadow z={10}/>
            </div>
            </div>
            </div>
            <button class={tw("button-home text-black centerx-r top-10 text-3xl px-7 py-3")}>Join</button>
          </div>
        </section>
        <hr class={tw("divider-home")}/>
        <section class={tw("bg-coolGray-900 p-4")}>
          <div>
            <h3>Automatic Snaps</h3>
            <p>
              Spotifio automatically takes a snapshot of
              of all your <a href="https://spotify.com">Spotify</a> playlists.
            </p>
          </div>
          <div>
            <h3>Notifications</h3>
            <p>
              After we get you a handful of snapshots. We notify you that your
              Music album is ready. By default we send the notifications to email
              connected with account.
            </p>
          </div>
          <div>
            <h3>Finally, Browser</h3>
            <p>
              And when you open the spotifio app you can browse your playlists by 
              changing the date on your toolbar to whatever day you would like to see.
            </p>
          </div>
        </section>
        <hr class={tw("divider-home")}/>
        <section class={tw("bg-coolGray-900 p-4")}>
          <h1>Tell your friends!</h1>
          <p>Pretty please <span>&#128063;</span></p>
          <p>So you can share your music taste with others.</p>
        </section>
        <section class={tw("bg-coolGray-900")}>
          <a href="">Support</a>
        </section>
      </main>
      <footer>
        <span>Sam</span>
        <span>Made with <span>&#10084;</span>, in Prague, Czechia</span>
      </footer>
    </div>
 )
}