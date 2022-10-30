export function getLogoutHeaders(): Record<string, string>
{
  return {
    "Set-Cookie": "userData=devops; Max-Age=-1; Path=/",
  }
}