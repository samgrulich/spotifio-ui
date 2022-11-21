import { tw, apply } from "twind";

import { RouteConfig } from "$fresh/server.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

import Disc from "../components/VinylDisc.tsx";
import VinylBackground from "../components/VinylBackground.tsx";
import Text, {Languages} from "../components/MultilingualText.tsx";


const IS_SERVER = !IS_BROWSER;
const isDebug = IS_SERVER ? Deno.env.get("IS_DEBUG") == "true" : false;

export const config: RouteConfig = {
  routeOverride: isDebug ? "/test" : "102030405060708090"
};

const messages = {
  "en": {
    "welcome": "Welcome to the test website",
  },
  "cz": {
    "welcome": "Vitej na testovaci strance",
  }
}

export default function testPage()
{
  return (
    <div class={tw("")}>
      <div class="bg-blue-500 olaf-400">TEST div</div>
      <div class="bg-black">
      <Disc size={64} style={"bg-coolGray-800"}/>
      </div>
      <div class={tw('relative p-20 w-screen bg-white')}>
        <div class={tw('absolute mx-[90%] mt-[10rem] p-5 bg-red-500')}></div>
        {/* <Disc size={15} color={"red"}/> */}
      </div>

      <Text lang={Languages.en} options={{"en": "Welcome to the test website"}}/>
      <div class="w-1/2 m-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Culpa deserunt autem cupiditate cum, minima laboriosam illo harum delectus, 
        vel eligendi ut illum nihil, officia iste maiores vero nam facere. Nihil?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, 
        voluptatem nam repudiandae provident nostrum dolor vitae fuga temporibus itaque animi.
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

      <VinylBackground vinylAmount={20} discSize={[8, 16]} tw={"w-screen h-20"}> 
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