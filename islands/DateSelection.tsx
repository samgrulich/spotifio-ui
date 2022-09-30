/** @jsx h */
import { h } from "preact";
import { StateUpdater } from "preact/hooks";
import { tw, apply } from "@twind";
import { IS_BROWSER } from "$fresh/runtime.ts";


const inputStyle = apply("bg-gray-700 p-2 rounded-full border-solid border-1 border-gray-600");

function Option(props: {date: string})
{
  const date = props.date;
  return <option value={date}>{date}</option>
}

export default function DateSelection(props: {callback: (date: string) => void}) 
{
  const todayDate = new Date();
  const todayString = todayDate.toISOString().split("T")[0];
  const style = IS_BROWSER ? apply("inline") : apply("inline animate-pulse");

  return (
    <div class={tw(style)}>
      <input type="date" name="dateSelection" id="dateSelection" 
        value={todayString} max={todayString} class={tw(inputStyle)}
        onChange={(event) => {
          const date = (event.target as HTMLInputElement).value
          props.callback(date);
        }}/>
    </div>
  )
}