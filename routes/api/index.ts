import { HandlerContext, Handlers, RouteConfig } from "$fresh/server.ts";
import { getApi, postApi } from "../../modules/api/functions.ts";


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

export async function handler(req: Request)
{
  const url = new URL(req.url);
  // const params = url.searchParams;
  const endpoint = url.pathname.replace("api/", "");
  console.log("ep", endpoint);

  if (!endpoint)
    return new Response("Endpoint not found", {status: 404});

  const endpointAPI = parseEndpoints(endpoint);

  const resp = await getApi(endpointAPI);
  return resp;
}