const API_URL = Deno.env.get("API_BASE") ?? "";

export enum Method 
{
  get = "get",
  post = "post"
}

export function fetchApi(endpoint: string, method: Method, data?: any)
{
  const url = new URL(endpoint, API_URL);
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
}

export function getApi(endpoint: string)
{
  return fetchApi(endpoint, Method.get);
}

export function postApi(endpoint: string, data: any)
{
  return fetchApi(endpoint, Method.post, data);
}