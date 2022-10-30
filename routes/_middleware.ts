import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  cookies: string;
}

export async function handler(
  _req: Request,
  ctxt: MiddlewareHandlerContext<State>,
) {
  try
  {
    const response = await ctxt.next();
    return response;
  }
  catch(err)
  {
    console.log(err);
    return new Response("This is wrong.. I shouldn't be here");
  }
}