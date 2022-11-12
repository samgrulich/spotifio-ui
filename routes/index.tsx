import Section from "../components/HomeSection.tsx";
import Preview from "../components/PlaylistPreview.tsx";


export default function HomePage()
{
  const style = {
    bubble: `
      absoluted 
      -translate-y-[70%] -translate-x-1/4 -z-10 
      background rounded-full
      w(36 sm:40 md:64) h(36 sm:40 md:64)
    `,
  };
  const connectURL = "/auth/connect";

  return (
    <div>
      <header class="p-2 mb-4">
        <div class="inline-flex">
          <div class={`${style.bubble} z-10`}></div>
          <span class="title z-20 absolute p-2 top-0 left-0">Spotifio</span>
        </div>
        <a href={connectURL}>
          <button class="button-home text-black float-right hidden md:block">Join</button>
        </a>
      </header>
      <main>
        <section class="section h-[100vh] relative bg-gradient-to-b from-black to-coolGray-900">
          <div class="center -translate-1/2 md:w-[60%] w-full">
          <div class="flex space-x-12 flex(wrap lg:nowrap)">
            <div class="my(20 lg:0)">
            <h1 class="text-2xl md:text-6xl sm:(w-screen text-center top-10 absolute) md:(w-auto top-0 relative)">Watch your playlists evolve</h1>
            <p class="hidden md:block w-0.8 text-xl">
              We look at the music you listen to and 
              then make you a library, 
              so you can see what you were listening to before.
            </p>
            </div>
            <div class="inline w-full lg:w-1/2">
            <div class={(`
              grid grid-cols-2 gap-2 md:hidden lg:grid
              -ml-6 md:ml-0 
              mb(10 md:0)
              sm:(w-[200px] relative left-1/2 top-14 -translate-x-1/2)
              md:(w-auto top-1/2)
            `)}>
              <Preview src="playlists/cover_vibe.jpeg" shadow z={10}/>
              <Preview src="playlists/cover_cesi.jpeg" shadow z={20}/>
              <Preview src="playlists/cover_zone.jpeg" shadow z={ 0}/>
              <Preview src="playlists/cover_vibe.jpeg" shadow z={10}/>
            </div>
            </div>
          </div>
          <a href={connectURL}>
            <button class="button-home text-black centerx-r top-0 text-3xl px-7 py-3">Join</button>
          </a>
          </div>
        </section>

        <hr class="divider-home-main"/>
        <section class="">
          <Section 
            header="See your own music history"
            img={{
              src: "home/detail_mac_preview.jpg", 
              alt: "playlist history caricature", 
              width: 350,
              "width-sm": 200,
            }}
          >
            With our app you can see how is your taste changing through the years. It's just like a photo album.
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header="Keep the old hits alive"
            img={{
              src: "home/old_radio.jpg", 
              alt: "old dusted song",
              width: 300,
              "width-sm": 200
            }}
            textRight
          >
            We save your old songs, so you can listen to them later.
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header="No stress, it's automatic"
            img={{
              src: "home/relax.jpeg", 
              alt: "a guy laying on the beach",
              width: 400,
              "width-sm": 200,
            }}
          >
            In practice you don't have to do much, but simply join.
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header="Get notified"
            img={{
              src: "home/notification.jpg",
              alt: "notification image",
              "width-sm": 150,
            }}
            textRight
          >
            After we get you a handful of snapshots. You get notification that it's ready.
            (btw. default notifications are set to email)
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header="Tell a friend!"
            img={{
              src: "home/share.jpg", 
              alt: "friends sharing music together",
              width: 500,
              "width-sm": 300
            }}
          >
            Spotify is the most powerful, when you can share it. So don't forget to tell your friends.
            That way you can share all your memories together.   
          </Section>
        </section>
      </main>
      <a href={connectURL}>
        <button class="button-home text-black centerx-r text-2xl px-7 py-3 mb-8">Join</button>
      </a>
      <hr class="divider-home-main"/>
      <footer class='bg-coolGray-900 flex items-center w-screen h-24 justify-around p-4'>
        <div>
          email: support@spotifio.com <br />
          {/* <a href="">Support</a> */}
        </div>
        <span class='bottom-0'>Made with <span>&#10084;</span>, by Sam</span>
      </footer>
    </div>
 )
}