/** @jsx h */
import { h } from "preact";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import { getApi } from "../../modules/api/functions.ts";

export const handler: Handlers = {
  async GET(req: Request, ctxt: HandlerContext): Promise<Response>
  {
    const url = new URL(req.url);
    const params = url.searchParams;
    const response = await getApi("/auth/callback", params);

    const data = await response.json();
    const pageResponse = data ? Response.redirect("/app", 200) : await ctxt.render();
     
    pageResponse.headers.append("Set-Cookie", JSON.stringify({UserId: data["id"], Token: data["token"]}));
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