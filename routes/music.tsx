/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Menu from "@root/components/Menu.tsx";

export default function Music()
{
  return (
    <div class={tw('')}>
      <Menu />

      <main>
        <h1>Music</h1>
        <p>Listen to music with friends only @here. ;-)</p>
      </main>
    </div>
  );
}