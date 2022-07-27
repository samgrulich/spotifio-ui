/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Menu from "../components/Menu.tsx";
import Redirect from "../islands/Test.tsx";

export default function Home() {
  return (
    <div class={tw('')}>
      <Menu />

      <main>
        <h1>Home</h1>
        <p>Welcome! Spotfio lets you track your spotify playlists and listen to music with friends</p>
      </main>

      {/* <Redirect path="./music"/> */}
    </div>
  );
}
