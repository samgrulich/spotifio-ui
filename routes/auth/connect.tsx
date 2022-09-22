import { Handlers, HandlerContext } from "$fresh/server.ts";
import { fetchApi, getApi } from "../../modules/api.ts";
// import { SCOPES } from "../../consts/spotify.ts";


const SCOPES = "user-read-private user-read-email playlist-modify-private playlist-read-private";
export const handler: Handlers = {
  async GET(req: Request, _ctx: HandlerContext): Promise<Response>
  {
    const resp = await getApi("/auth/connect");

    if (resp.status != 200)
    {
      // todo: return error
      return new Response();
    }

    const data = await resp.json();
    const queryURL = data["url"];
    return Response.redirect(queryURL, 302);
  } 
}