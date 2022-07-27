/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps, Handlers, HandlerContext } from "$fresh/server.ts";
import { SPOTIFY_API_TOKEN, SPOTIFY_API_AUTH } from "../../consts/spotify.ts";


interface Credentials 
{
  disc: "credentials";
  accessToken: string;
  timeToLive: number;
  refreshToken: string;
}

interface SpotifyError
{
  disc: "error";
  code: number;
  msg: string;
}

export const handler: Handlers<Credentials | SpotifyError> = {
  async GET(req: Request, ctx: HandlerContext<Credentials | SpotifyError>) {
    const url = new URL(req.url);
    const params: URLSearchParams = url.searchParams;
    
    if (!params.has("code"))
    {
      const err: SpotifyError = {disc: "error", code: parseInt(params.get("error") || "0"), msg: "Spotify authentication failed"}; 
      return  ctx.render(err);
    }

    const code = params.get("code");
    const data = {
      grant_type: "authorization_code",
      code: code || "",
      redirect_uri: `${url.origin}/auth/callback`,
    };

    const response = await fetch(SPOTIFY_API_TOKEN, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Authorization": SPOTIFY_API_AUTH,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data)
    });

    const respData = await response.json();
    const credentials: Credentials = {
      disc: "credentials",
      accessToken: respData["access_token"],
      timeToLive: respData["expires_in"],
      refreshToken: respData["refresh_token"],
    };
    return ctx.render(credentials);
  } 
}

export default function CallbackPage({ data }: PageProps<Credentials | SpotifyError>) {
  if (data.disc == "error")
  {
    return (
      <div>
        <h1>Problem...</h1>
        <p>There's occurred an error while authenticating.</p>
        <h2>Info</h2>
        <h3>{data.code}</h3>
        <p>{data.msg}</p>
      </div>
    );
  }

  return (
    <div>
      You're in!
      <span>{data.accessToken}</span>
      <span>{data.refreshToken}</span>
    </div>
  );
}