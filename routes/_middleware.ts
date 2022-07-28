import { MiddlewareHandlerContext } from "$fresh/server.ts";

interface State {
  data: string;
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>,
) {
  ctx.state.data = "myData";
  const resp = await ctx.next();
  console.log("request", req);
  // resp.headers.set("server", "fresh server");
  return resp;
}