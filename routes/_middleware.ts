import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  cookies: string;
}

export async function handler(
  req: Request,
  ctxt: MiddlewareHandlerContext<State>,
) {
  try
  {
    const response = await ctxt.next();
    
    // if (response.status >= 400)
    //   throw response;

    return response;
  }
  catch(err)
  {
    console.log(err);
    return new Response("This is wrong.. I shouldn't be here");
  }

  // ctx.state.cookies = req.headers.get("cookie") || "";
  // resp.headers.set("server", "fresh server");
  // error handling
}