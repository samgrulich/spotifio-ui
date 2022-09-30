/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import DateSelection from "../islands/DateSelection.tsx"; 


export default function testPage()
{
  return (
    <div class={tw("p-auto m-auto flex justify-center content-center w-screen h-screen")}>
      <DateSelection />
    </div>
  )
}