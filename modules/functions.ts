// deno-lint-ignore-file no-explicit-any

// functions for request/response data manipulation

export function parseCookies(cookie: string): Record<string, any>
{
  const cookieArr = cookie.split('; ');
  const result: Record<string, string> = {};

  for(const cookieStr of cookieArr)
  {
    const [key, val] = cookieStr.split('=');
    result[key] = val;
  }

  return result;
}

export function parseCookieHeader(headers: Headers): Record<string, any>
{
  const cookiesRaw = headers.get("cookie") || "";    
  const cookies = parseCookies(cookiesRaw);

  return cookies;
}

export function parseParams(params: URLSearchParams): Record<string, any>
{
  const paramsObj: Record<string, any> = {};
  params.forEach((val, key) => paramsObj[key] = val);

  return paramsObj;
}

export function createRedirectResponse(url: string | URL, headers?: Record<string, string>): Response
{
  const href = typeof url == "string" ? url : url.href;

  return new Response("Redirecting...", {
    status: 308,
    headers: {
      "Location": href,
      ...headers
    }
  });
}