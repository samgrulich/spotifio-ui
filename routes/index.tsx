/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Menu from "../islands/Menu.tsx";

export default function Home() {
  return (
    <div class={tw`page p-4 mx-auto max-w-screen-md`}>
      <Menu />

      <div>
        <h1>Spotifio</h1>
        <p>Welcome! Spotfio lets you track your spotify playlists and listen to music with friends</p>
      </div>
    </div>
  );
}
