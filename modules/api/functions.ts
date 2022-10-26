import "dotenv/load.ts";
import { parseCookieHeader } from "../functions.ts";

// TODO: implement non server based alternative or api request ep
const API_URL = Deno.env.get("API_BASE") ?? "";

if (!API_URL)
  console.warn("API_BASE missing from .env");

export enum Method 
{
  get = "get",
  post = "post"
}

export function fetchApi(endpoint: string, reqHeaders: Headers, method: Method, data?: any, searchParams?: URLSearchParams)
{
  const url = new URL(endpoint, API_URL);
  const cookies = parseCookieHeader(reqHeaders);
  const userData = JSON.parse(cookies["userData"] ?? "{}");
  const options: Record<string, any> = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...userData
    }
  }

  if (method == Method.post)
    options["body"] = JSON.stringify(data);

  searchParams?.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  return fetch(url, options)
    .then(async res => {
      if(!res.ok)
      {
        const data = await res.json()
          .then(err => err)
          .catch(_ => res.statusText);

        if (Object.keys(data).includes("reason"))
        {
          switch (data["reason"]) {
            case "User already logged in":
            {
              const response = new Response(JSON.stringify(data), {status: 202});
              return response;
            }
          
            default:
              throw JSON.stringify(data);
          }
        }

        throw JSON.stringify(data);
      }
      
      return res;
    })
    .catch(err => {
      // const body = {msg: "Server communication failed", err: err.message};
      throw Error(err);
      // return new Response(JSON.stringify(body), {status: 500});
    });
}

export function getApi(endpoint: string, reqHeaders: Headers, searchParams?: URLSearchParams)
{
  return fetchApi(endpoint, reqHeaders, Method.get, "", searchParams);
}

export function postApi(endpoint: string, reqHeaders: Headers, data: any)
{
  return fetchApi(endpoint, reqHeaders, Method.post, data);
}