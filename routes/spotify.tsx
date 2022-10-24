/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Test1 from "../islands/test.tsx";

export default function Test()
{
  return (
    <div>
      <Test1></Test1>

      {/* <script src="https://sdk.scdn.co/spotify-player.js"></script>
      <script>
        console.log("aloha")
      </script> */}
    </div>
  )
}