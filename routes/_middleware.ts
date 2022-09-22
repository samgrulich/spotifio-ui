import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  cookies: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  // ctx.state.cookies = req.headers.get("cookie") || "";
  const resp = await ctx.next();
  // resp.headers.set("server", "fresh server");

  // error handling
  return resp;
}