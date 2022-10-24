/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Player()
{
  if (!IS_BROWSER)
    return ( <div></div> );

  document.addEventListener("click", (e) => {
    console.log("clicked", e.target);
    const element = e.target;
  });

  return (
    <div></div>
  )
}