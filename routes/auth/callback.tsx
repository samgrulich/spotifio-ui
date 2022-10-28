/** @jsx h */
import { h } from "preact";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import { getApi } from "../../modules/api/functions.ts";
import { createRedirectResponse } from "../../modules/functions.ts";


export const handler: Handlers = {
  async GET(req: Request, ctxt: HandlerContext): Promise<Response>
  {
    const url = new URL(req.url);
    const params = url.searchParams;
    const response = await getApi("/auth/callback", req.headers, (ctxt.remoteAddr as Record<string, any>)["hostname"], params);

    const data = await response.json();
    const appURL = new URL("/app", req.url);

    const userData = {UserId: data["id"], Token: data["token"], country: data["country"]};

    if (!userData)
      return Response.redirect("/");

    const headers = {"Set-Cookie": `userData=${JSON.stringify(userData)}; Max-Age=3600; Path=/`}

    const pageResponse = data ? createRedirectResponse(appURL.href, headers) : await ctxt.render();    
   
    return pageResponse;
  }
}

export default function Callback()
{
  return (
    <div>
      Well... <br />
      This is awkward.
      <a href="/auth/connect">Click here to connect again</a>
    </div>
  )
}