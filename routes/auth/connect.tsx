import { h } from "preact";
import { tw } from "@twind";
import { Handlers, HandlerContext } from "$fresh/server.ts";
import "dotenv/load.ts";
import { scopes } from "../../consts/spotify.ts";

export const handler: Handlers = {
    async GET(req: Request, _ctx: HandlerContext): Response
    {
        const url = new URL(req.url);
        const state = crypto.randomUUID().replaceAll("-", "").substring(0, 16);
        const data = {
            "client_id": Deno.env.get("CLIENT_ID"),
            "redirect_uri": `${url.origin}/auth/callback`,
            "response_type": "code",
            "scope": scopes,
            "state": state,
        }

        const searchParams = new URLSearchParams(data);
        const params = searchParams.toString();
        const spotifyURL = "https://accounts.spotify.com/authorize";
        const queryURL = `${spotifyURL}?${params}`;

        return Response.redirect(queryURL, 302);
    } 
}