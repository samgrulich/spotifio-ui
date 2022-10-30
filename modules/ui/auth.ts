export function getLogoutHeaders(): Record<string, string>
{
  return {
    "Set-Cookie": "userData={}; Max-Age=0, Path=/",
  }
}