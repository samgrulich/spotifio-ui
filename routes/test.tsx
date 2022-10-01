/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import DateSelection from "../islands/DateSelection.tsx"; 
import VinylDisc from "../components/VinylDisc.tsx";


export default function testPage()
{
  return (
    <div class={tw("p-auto m-auto inline-flex justify-center content-center w-screen")}>
      <VinylDisc size={16} style={"bg-coolGray-800"}/>
    </div>
  )
}