export const SCOPES = "user-read-private user-read-email playlist-modify-private playlist-read-private";


export const SPOTIFY_API_AUTH = "Basic " + btoa(Deno.env.get("CLIENT_ID") + ":" + Deno.env.get("CLIENT_SECRET"));
export const SPOTIFY_API = "https://accounts.spotify.com/api";
export const SPOTIFY_API_TOKEN = `${SPOTIFY_API}/token`;
