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
  const cookiesKeys = Object.keys(cookies);

  return cookies;
}