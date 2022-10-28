import { RouteConfig, HandlerContext } from "$fresh/server.ts";
import { getApi } from "../../modules/api/functions.ts";


export function parseEndpoints(url: string)
{
  const points = url.split("/");
  const resultArray = points.map((point: string) => {
    return Object.keys(GETEndpoints).includes(point) ? GETEndpoints[point] : point;
  });
  const result = resultArray.reduce((prev, current) => `${prev}/${current}`);
  return result;
}

export const GETEndpoints: Record<string, any> = {
  chunk: `versions/snapshots/chunk`,
  date: `versions/snapshots`,
  detail: `versions/snapshots/detail`,
}

export const config: RouteConfig = {
  routeOverride: "/api*"
};

export async function handler(req: Request, ctxt: HandlerContext)
{
  const url = new URL(req.url);
  // const params = url.searchParams;
  const endpoint = url.pathname.replace("api/", "");
  console.log("ep", endpoint);

  if (!endpoint)
    return new Response(JSON.stringify({msg: "Endpoint not found"}), {status: 404});

  const endpointAPI = parseEndpoints(endpoint);

  const ip = (ctxt.remoteAddr as Record<string, any>)["hostname"];
  // todo: add an ip hash
  const resp = await getApi(endpointAPI, req.headers, ip);
  return resp;
}