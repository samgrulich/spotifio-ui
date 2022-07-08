/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Menu from "../islands/Menu.tsx";

export default function Music()
{
  return (
    <div class={tw`page p-4 mx-auto max-w-screen-md`}>
      <Menu />
      
      <h1>Music</h1>
      <p>Listen to music with friends only @here. ;-)</p>
    </div>
  );
}