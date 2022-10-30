// deno-lint-ignore-file no-explicit-any

// functions for api connection

import "dotenv/load.ts";
import { parseCookieHeader } from "../functions.ts";


const API_URL = Deno.env.get("API_BASE") ?? "";

if (!API_URL)
  console.warn("API_BASE missing from .env");

export enum Method 
{
  get = "get",
  post = "post"
}

export function fetchApi(endpoint: string, reqHeaders: Headers, ip: string, method: Method, data?: any, searchParams?: URLSearchParams)
{
  const url = new URL(endpoint, API_URL);
  console.log(url);
  const cookies = parseCookieHeader(reqHeaders);
  const userData = JSON.parse(cookies["userData"] ?? "{}");
  const options: Record<string, any> = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...userData,
      "UserIp" : ip,
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
      throw Error(err);
    });
}

export function getApi(endpoint: string, reqHeaders: Headers, ip: string, searchParams?: URLSearchParams)
{
  return fetchApi(endpoint, reqHeaders, ip, Method.get, "", searchParams);
}

export function postApi(endpoint: string, reqHeaders: Headers, ip: string, data: any)
{
  return fetchApi(endpoint, reqHeaders, ip, Method.post, data);
}