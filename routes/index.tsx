/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Menu from "../components/Menu.tsx";

export default function Home() {
  if(!localStorage.getItem("x"))  
    localStorage.setItem("x", "10");
  
  localStorage["x"]++;

  return (
    <div class={tw('')}>
      <Menu />

      <main>
        <h1>Home</h1>
        <p>Welcome! Spotfio lets you track your spotify playlists and listen to music with friends</p>
      </main>

      <span>{localStorage.getItem("x")}</span>
    </div>
  );
}
