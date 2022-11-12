import { Handlers, HandlerContext } from "$fresh/server.ts";

import { getApi } from "../../modules/api/functions.ts";
import { parseIP } from "../../modules/ui/functions.ts";


export const handler: Handlers = {
  async GET(req: Request, ctxt: HandlerContext): Promise<Response>
  {
    const resp = await getApi("/auth/connect", req.headers, parseIP(ctxt));

    if (!resp.ok)
    {
      throw new Error(await resp.text());
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