// deno-lint-ignore-file no-explicit-any

// functions used in/by the UI elements

import { HandlerContext } from "$fresh/server.ts";
import * as colors from "twind/colors";


const bannedColors = ["white", "black"];

export function randomValue(min=0, max=1)
{
  const random = Math.random();
  return random * (max - min) + min;
}

export function randomColor(fallbackColor="amber")
{
  const colorIds = Object.keys(colors);
  const colorIndex = Math.floor(Math.random() * colorIds.length);
  const color = colorIds[colorIndex];

  if (bannedColors.includes(color))
    return fallbackColor;
  
  return color;
}

export function randomElement(selection: Array<any>)
{
  const index = Math.floor(Math.random() * selection.length);
  return selection[index];
}

export function randomElementWeiged(selection: Record<string, number>)
{
  const weighedSelection = Object.entries(selection)
    .map(([selection, weight]) => 
    Array.from(Array(weight).keys())
      .map(_ => selection))
  .flat();

  const index = Math.floor(Math.random() * weighedSelection.length);
  return weighedSelection[index];
}

export function getToday(): string
{
  const date = new Date();
  const str = date.toISOString().split("T")[0];
  return str;
}

export function parseIP(ctxt: HandlerContext<any>)
{
  return (ctxt.remoteAddr as Record<string, any>)["hostname"];
}

export function fallback<T, F>(val: T, fallback: T | F): T | F
{
  return val ?? fallback;
}