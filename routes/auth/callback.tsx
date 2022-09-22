/** @jsx h */
import { h } from "preact";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import { getApi } from "../../modules/api.ts";

export const handler: Handlers = {
  GET(req: Request, _ctx: HandlerContext): Response
  {
    const url = new URL(req.url);
    const params = url.searchParams;
    const response = getApi("/auth/callback", params);

    return new Response();
  }
}

export default function Callback()
{
  return (
    <div>
      Well... <br />
      This is awkward.
    </div>
  )
}