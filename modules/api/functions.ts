import "dotenv/load.ts";

// TODO: implement non server based alternative or api request ep
const API_URL = Deno.env.get("API_BASE") ?? "";

if (!API_URL)
  console.warn("API_BASE missing from .env");

export enum Method 
{
  get = "get",
  post = "post"
}

export function fetchApi(endpoint: string, method: Method, data?: any, searchParams?: URLSearchParams)
{
  const url = new URL(endpoint, API_URL);
  const options: Record<string, any> = {
    method,
    headers: {
      "Content-Type": "application/json",
    }
  }

  if (method == Method.post)
    options["body"] = JSON.stringify(data);

  searchParams?.forEach((value, key) => {
    url.searchParams.set(key, value);
  });

  return fetch(url, options)
    // .catch(err => {
    //   const body = {msg: "Server communication failed", err: err.message};
    //   // return new Response(JSON.stringify(body), {status: 500});
    // });
}

export function getApi(endpoint: string, searchParams?: URLSearchParams)
{
  return fetchApi(endpoint, Method.get, "", searchParams);
}

export function postApi(endpoint: string, data: any)
{
  return fetchApi(endpoint, Method.post, data);
}