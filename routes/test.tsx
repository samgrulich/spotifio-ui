/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";
import DateSelection from "../islands/DateSelection.tsx"; 
import Disc from "../components/VinylDisc.tsx";
import VinylBackground from "../components/VinylBackground.tsx";


export default function testPage()
{
  return (
    <div class={tw("")}>
      <div class={tw("bg-white")}>
      <Disc size={64} style={"bg-coolGray-800"}/>
      </div>
      <div class={tw('relative p-20 w-screen bg-white')}>
        <div class={tw('absolute mx-[90%] mt-[10rem] p-5 bg-red-500')}></div>
        {/* <Disc size={15} color={"red"}/> */}
      </div>

      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>
      <div>main</div>

      <VinylBackground vinylAmount={20} discSize={[8, 16]} style={"w-screen h-20"}> 
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      <div>Ahoj</div>
      </VinylBackground>
    </div>
  )
}