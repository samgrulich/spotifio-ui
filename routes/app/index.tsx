import { tw, apply } from "twind";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";

import PlaylistsRenderer from "../../islands/PlaylistsRender.tsx";
import Player from "../../components/VinylPlayer.tsx";

import { getApi } from "../../modules/api/functions.ts";
import { IUser } from "../../modules/api/types.ts";
import { getLogoutHeaders } from "../../modules/ui/auth.ts";
import { createRedirectResponse, parseCookieHeader } from "../../modules/functions.ts";
import { parseIP } from "../../modules/ui/functions.ts";


export const handler: Handlers<IUser> = {
  async GET(req: Request, ctxt: HandlerContext<IUser>)
  {
    const cookies = parseCookieHeader(req.headers);
    
    if (!Object.keys(cookies).includes("userData"))
      return Response.redirect(new URL("/auth/connect", req.url));

    else if (cookies["userData"] == "{}")
      return createRedirectResponse(new URL("/auth/connect", req.url), getLogoutHeaders());

    const res = await getApi("/users/detail", req.headers, parseIP(ctxt));

    if(!res.ok)
      throw Error(await res.text());

    const userData: IUser = await res.json();
    return ctxt.render(userData);
  }
}

export default function Playlists({ data }: PageProps<IUser>)
{
  const userCover = data.cover[0]?.url ?? "";
  const userCoverOpacity = userCover ? "" : "opacity-0";

  return (
    <div class='group-main h-screen w-screen'>
      <main class='pt(16 md:24) p-0'>
        <div class='min-h-screen'>
          <span id="dateTarget" class="centerx top-8 font-bold">{new Date().toLocaleDateString()}</span>
          <div id="renderTarget" class={`
            grid grid-cols(2 md:3 lg:4) 
            mx(0 md:auto) 
            w(sm:[100%] md:[80%] lg:[1000px]) 
            gap(x(sm:1 md:16 lg:24) y(sm:0 md:16))
          `}></div>
        </div>

        <div 
          style="backdrop-filter: blur(12px);"
          class={`
            sticky interactive 
            p-5 h-24 w-screen 
            shadow-lg 
            bottom-0 left-0 float-bottom 
            lg:(translate-x-[25%] w-2/3 rounded-t-lg)
          `}
        >
          <div class="centerx sm:-top-14 md:-top-16 md:scale-[1.4]">
            <a href="/app">
              <Player style="border(solid coolGray-900 1) shadow(md)"/>
            </a>
          </div>

          <div class={`
            absolute sm:(top-[60%]) left-1/2 
            md:(block top-1/2 left-24 -translate-y-1/2)
          `}>
            <a href="/">
              <h1 class={`
                absoluted -translate-x-1/2 -translate-y-([150%] md:1/2)
                title
              `}>Spotifio</h1>
            </a>
          </div>

          <div class={`
            absolute top-1/2 
            sm:(right-full translate-x-full) pl(1 md:0) 
            scale([80%] md:100) md:(right-[14%] -translate-x-2/3) -translate-y-1/2
          `}>
            <PlaylistsRenderer />
          </div>
          
          <div class="absolute right-0 tranlate-x-1/2">
            
            <div class="group-user h-16 w-auto mr(2 md:10) relative right-0 inline-flex">
              <img 
                class={tw("w-10 h-10 my-auto rounded-full bg-black sm:hidden md:block", userCoverOpacity)} 
                src={userCover} 
                alt=" "
              /> 
              <span class="my-auto mx-4">{data.name}</span>
              <div class={`
                absolute p-3 top-0 
                interactive bg-black 
                rounded-t-lg opacity-0 
                -translate-y-2/3 
                group-user-hover:(opacity-100 -translate-y-full transition-all duration-200 ease-in-out)
              `}>
                <a href="/">Home</a> <br />
                <a href="/auth/logout">Log out</a> <br />
              </div> 
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}