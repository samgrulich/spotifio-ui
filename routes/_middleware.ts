import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { parseCookies } from "../modules/functions.ts";

interface State {
  cookies: string;
}

export async function handler(
  req: Request,
  ctxt: MiddlewareHandlerContext<State>,
) {
  try
  {
    const cookiesRaw = req.headers.get("cookie") || "";    
    const cookies = parseCookies(cookiesRaw);
    const cookiesKeys = Object.keys(cookies);

    if(cookiesKeys.includes("UserId"))
      req.headers.set("User-Id", cookies["UserId"]);
    if(cookiesKeys.includes("Token"))
      req.headers.set("Token", cookies["Token"]);

    const response = await ctxt.next();

    return response;
  }
  catch(err)
  {
    console.log(err);
    return new Response("This is wrong.. I shouldn't be here");
  }

  // error handling
}