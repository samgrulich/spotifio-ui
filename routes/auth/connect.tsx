/** @jsx h */
import { h } from "preact";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import { getApi } from "../../modules/api/functions.ts";

const SCOPES = "user-read-private user-read-email playlist-modify-private playlist-read-private";
export const handler: Handlers = {
  async GET(req: Request, ctxt: HandlerContext): Promise<Response>
  {
    const resp = await getApi("/auth/connect", req.headers, (ctxt.remoteAddr as Record<string, any>)["hostname"]);

    if (resp.status != 200)
    {
      // todo: return error
      return await ctxt.render();
    }

    const data = await resp.json();
    const queryURL = data["url"];
    return Response.redirect(queryURL, 302);
  } 
}

export default function Connect()
{
  return (
    <div>
      Something's wrong, I can feel it.
    </div>
  )
}