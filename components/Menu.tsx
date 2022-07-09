/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";
import MenuButton  from "./MenuButton.tsx";

const Head = () => (
  <head>
    <title>Spotifio</title>
  </head>
)

export default function Menu()
{
  return (
    <div class={tw('w-screen mb-3 py-3 bg-black flex justify-center')}>
    <nav class={tw('container w-1/3')}>
      <Head />
      <h1 class={tw('p-1 bg-gradient-to-r from-green-400 to-indigo-500')}> <a class={tw('text-black')} href="/">Spotifio</a></h1>
      <ul class={tw('flex font-bold space-x-5 float-right')}>
        <MenuButton name="Home" href="/" />
        <MenuButton name="Plists" href="/playlists" />
        <MenuButton name="Music" href="/music" />
      </ul>
    </nav>
    </div>
  );
}
