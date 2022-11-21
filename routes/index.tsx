import Section from "../components/HomeSection.tsx";
import Preview from "../components/PlaylistPreview.tsx";
import Text, { Languages } from "../components/MultilingualText.tsx";
import { HandlerContext, PageProps } from "$fresh/server.ts";


interface PageConfig 
{
  lang: Languages;
}

export async function handler(req: Request, ctxt: HandlerContext)
{
  const searchParams = new URL(req.url).searchParams;

  const langShort = searchParams.get("hl") ?? "en";
  const isLangValid = Object.keys(Languages).includes(langShort);

  const lang = isLangValid ? langShort as Languages : Languages.en; 
  const resp = await ctxt.render({lang: lang});
  return resp;
}

export default function HomePage({ data }: PageProps<PageConfig>)
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
  const config = {
    lang: data.lang,
    options: locale,
  }

  return (
    <div>
      <header class="p-2 mb-4">
        <div class="inline-flex">
          <div class={`${style.bubble} z-10`}></div>
          <span class="title z-20 absolute p-2 top-0 left-0">Spotifio</span>
        </div>
        <a href={connectURL}>
          <button class="button-home text-black float-right hidden md:block"><Text id="join" config={config} /></button>
        </a>
      </header>
      <main>
        <section class="section h-[100vh] relative bg-gradient-to-b from-black to-coolGray-900">
          <div class="center -translate-1/2 md:w-[60%] w-full">
          <div class="flex space-x-12 flex(wrap lg:nowrap)">
            <div class="my(20 lg:0)">
            <h1 class="text-2xl md:text-6xl sm:(w-screen text-center top-10 absolute) md:(w-auto top-0 relative)"><Text id="intro-h" config={config}/></h1>
            <p class="hidden md:block w-0.8 text-xl">
              <Text id="intro-p" config={config}/>
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
            <button class="button-home text-black centerx-r top-0 text-3xl px-7 py-3"><Text id="join" config={config} /></button>
          </a>
          </div>
        </section>

        <hr class="divider-home-main"/>
        <section class="">
          <Section 
            header={<Text id="sec-history-h" config={config} />}
            img={{
              src: "home/detail_mac_preview.jpg", 
              alt: "playlist history caricature", 
              width: 350,
              "width-sm": 200,
            }}
          >
            <Text id="sec-history-p" config={config} />
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header={<Text id="sec-hits-h" config={config} />}
            img={{
              src: "home/old_radio.jpg", 
              alt: "old dusted song",
              width: 300,
              "width-sm": 200
            }}
            textRight
          >
            <Text id="sec-hits-p" config={config} />
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header={<Text id="sec-auto-h" config={config} />}
            img={{
              src: "home/relax.jpeg", 
              alt: "a guy laying on the beach",
              width: 400,
              "width-sm": 200,
            }}
          >
            <Text id="sec-auto-p" config={config} />
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header={<Text id="sec-notifications-h" config={config} />}
            img={{
              src: "home/notification.jpg",
              alt: "notification image",
              "width-sm": 150,
            }}
            textRight
          >
            <Text id="sec-notifications-p" config={config} />
          </Section>
          <hr class="divider-home-main"/>
          <Section 
            header={<Text id="sec-share-h" config={config} />}
            img={{
              src: "home/share.jpg", 
              alt: "friends sharing music together",
              width: 500,
              "width-sm": 300
            }}
          >
            <Text id="sec-share-p" config={config} />
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
        <span class='bottom-0'><Text id="bottom" config={config}/></span>
      </footer>
    </div>
 )
}

const locale = {
  "en": {
    "intro-h": <>Watch your playlists evolve</>,
    "intro-p": <>
      We look at the music you listen to and 
      then make you a library, 
      so you can see what you were listening to before.
    </>,
    "join": "Join",
    "sec-history-h": "See your own music history",
    "sec-history-p": <>With our app you can see how is your taste changing through the years. It's just like a photo album.</>,
    "sec-hits-h": "Keep the old hits alive",
    "sec-hits-p": <>We save your old songs, so you can listen to them later.</>,
    "sec-auto-h": "No stress, it's automatic",
    "sec-auto-p": <>In practice you don't have to do much, but simply join.</>,
    "sec-notifications-h": "Get notified",
    "sec-notifications-p": <>
      After we get you a handful of snapshots. You get notification that it's ready.
      (btw. default notifications are set to email)
    </>,
    "sec-share-h": "Tell a friend!",
    "sec-share-p": <>
      Spotifio is the most powerful, when you can share it. So don't forget to tell your friends.
      That way you can share all your memories together.   
    </>,
    "bottom": <>Made with <span>&#10084;</span>, by Sam</>
  },
  "cs": {
    "intro-h": <>Koukej jak se tvoje playlisty mění</>,
    "intro-p": <>
      Sledujeme, co posloucháš a zaznamenáváme to na později jen pro tebe.
      Takže si pak můžeš připomenout co jsi poslouchal dřív. {/** e? */}
    </>,
    "join": "Přihlásit",
    "sec-history-h": "Mrkni na historii tvojí hubdy",
    "sec-history-p": <>S naší appkou můžeš sledovat jak se mění tvůj vkus během let. Jako foto-album.</>,
    "sec-hits-h": "Nezapomeň na svoje hity",
    "sec-hits-p": <>Také ukládáme tvoje staré písničky, takže ti je jednou za čas připomeneme.</>,
    "sec-auto-h": "No stress, běží to samo",
    "sec-auto-p": <>Tím pádem toho moc dělat nemusíš. Prostě se připoj.</>,
    "sec-notifications-h": "Dostávej upozornění",
    "sec-notifications-p": <>
      Potom co ti seženeme pár momentek. Ti napíšeme, že jsme připraveni.
      (btw. základně tě upozorníme emailem)
    </>,
    "sec-share-h": "Řekni ostatním!",
    "sec-share-p": <>
      Spotifio si nejvíce užiješ, když se můžeš podělit s přáteli. Tak jim o nás nezapomeň říct.
      Takže pak spolu můžete sdílet svoje vzpomínky navzájem.
    </>,
    "bottom": <>Vytvářeno s <span>&#10084;</span>, od Sama</>
  }
}