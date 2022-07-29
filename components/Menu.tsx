/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { Credentials } from "../modules/types.ts";
import MenuButton  from "./MenuButton.tsx";
import Login from "./LoginButton.tsx";

const Head = () => (
  <head>
    <title>Spotifio</title>
  </head>
)

export default function Menu(props: Credentials)
{
  return (
    <div class={tw('w-screen mb-3 py-3 bg-black')}>
    <Head />
    <nav class={tw('flex w-full justify-center space-x-40')}>
      <h1 class={tw('p-1 bg-gradient-to-r from-green-400 to-indigo-500')}> <a class={tw('text-black')} href="/">Spotifio</a></h1>
      <ul class={tw('inline-flex font-bold space-x-5')}>
        <MenuButton name="Home" href="/" isActive={false}/>
        <MenuButton name="Plists" href="/playlists" isActive={false}/>
        <MenuButton name="Music" href="/music" isActive={false}/>
      </ul>
      <a class={tw('inline')} href="/auth/connect">Login</a>
      <Login sessionID={props.sessionID}></Login>
    </nav>
    </div>
  );
}
