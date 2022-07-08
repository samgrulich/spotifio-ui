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
    <nav class={tw`font-bold`}>
      <Head />
      <ul class="nabar-nav">
        <MenuButton name="Home" href="/" />
        <MenuButton name="P-lists" href="/playlists" />
        <MenuButton name="Music" href="/music" />
      </ul>
    </nav>
  );
}
