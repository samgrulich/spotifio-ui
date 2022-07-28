/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

export default function AutoLogger() 
{
  if(!IS_BROWSER)
    return (
      <div >Server side rendered content</div>
    );

    return (
      <div></div>
    );
}