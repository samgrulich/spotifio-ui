/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { HandlerContext, Handlers } from "$fresh/server.ts";
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
  chunk: `versions/snapshots/chunk/`,
  date: `versions/snapshots/`,
  detail: `versions/snapshots/detail/`,
}

export const handler: Handlers = {
  async GET(req: Request, ctxt: HandlerContext): Promise<Response>
  {
    const endpoint = req.headers.get("endpoint");

    if (!endpoint)
      return new Response("Endpoint not found", {status: 404});

    const endpointAPI = parseEndpoints(endpoint);

    const resp = await getApi(endpointAPI);
    return resp;
  },
  POST(req: Request, ctxt: HandlerContext): Response
  {
    return new Response("");
  }
};