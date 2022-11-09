/** @jsx h */
import { h } from "preact";
import { apply, tw } from "@twind";

import Section from "../components/HomeSection.tsx";
import Preview from "../components/PlaylistPreview.tsx";

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
      <header class={tw("p-2 my-2")}>
        <div class={tw("inline-flex")}>
          <div class={tw(style.bubble, "z-10")}></div>
          <span class={tw("title z-20 absolute p-2 top-0 left-0")}>Spotifio</span>
        </div>
        <button class={tw("button-home text-black float-right")}>Join</button>
      </header>
      <main>
        <section class={tw("section h-[100vh] relative bg-gradient-to-b from-black to-coolGray-900")}>
          <div class={tw("center -translate-1/2 md:w-[60%] w-full")}>
          <div class={tw("flex space-x-12 flex(wrap lg:nowrap)")}>
            <div class={tw("my(20 lg:0)")}>
            <h1 class={tw("text-2xl md:text-6xl sm:(w-screen text-center absolute) md:(w-auto relative)")}>Watch your playlists evolve</h1>
            <p class={tw("hidden md:block w-0.8 text-xl")}>
              We look at the music you listen to and 
              then make you a library, 
              so you can see what you were listening to before.
            </p>
            </div>
            <div class={tw("inline w-full lg:w-1/2")}>
            <div class={tw(`
              grid grid-cols-2 gap-2 md:hidden lg:grid
              -ml-6 md:ml-0 
              mb(10 md:0)
              sm:(w-[200px] relative left-1/2 top-1/3 mt-10 -translate-x-1/2)
              md:(w-auto top-1/2)
            `)}>
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

        <hr class={tw("divider-home-main")}/>
        <section class={tw("")}>
          <Section 
            header="See your own music history"
            img={{src: "playlists/cover_vibe.jpeg", alt: "playlist history caricature"}}
          >
            With our app you can see how is your taste changing through the years. It's just like a photo album.
          </Section>
          <hr class={tw("divider-home-main")}/>
          <Section 
            header="Keep the old songs alive"
            img={{src: "", alt: "old dusted song"}}
            textRight
          >
            We save your old songs, so you can listen to them later.
          </Section>
          <hr class={tw("divider-home-main")}/>
          <Section 
            header="No stress, it's automatic"
            img={{src: "", alt: "a guy laying on the beach"}}
          >
            In practice you don't have to do much, but simply join.
          </Section>
          <hr class={tw("divider-home-main")}/>
          <Section 
            header="Get notified"
            img={{src: "", alt: "notification image"}}
            textRight
          >
            After we get you a handful of snapshots. You get notification that it's ready.
            (btw. default notifications are set to email)
          </Section>
          <hr class={tw("divider-home-main")}/>
          <Section 
            header="Tell a friend!"
            img={{src: "", alt: "friends sharing music together"}}
          >
            Spotify is the most powerful, when you can share it. So don't forget to tell your friends.
            That way you can share all your memories together.   
          </Section>
        </section>
      </main>
      <footer class={tw('bg-coolGray-900 flex items-center w-screen justify-around p-4')}>
        <div>
          email: yes <br />
          <a href="">Support</a>
        </div>
        <span class={tw('bottom-0')}>Made with <span>&#10084;</span>, by Sam</span>
      </footer>
    </div>
 )
}