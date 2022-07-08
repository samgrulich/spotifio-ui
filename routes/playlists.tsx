/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Menu from "../islands/Menu.tsx";

export default function Playlists()
{
  return (
    <div class={tw`page p-4 mx-auto max-w-screen-md`}>
      <Menu />
      
      <h1>Playlists</h1>
      <p>Track your playlists @here!</p>
    </div>
  );
}