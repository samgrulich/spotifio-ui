// logout user

import { createRedirectResponse } from "../../modules/functions.ts";
import { getLogoutHeaders } from "../../modules/ui/auth.ts";


export function handler(req: Request)
{
  return createRedirectResponse(new URL("/", req.url), getLogoutHeaders());
}
