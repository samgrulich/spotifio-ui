/** @jsx h */
// functions used to render the UI elements

import { h } from "preact";
import { tw } from "@twind";
import { randomElement } from "./functions.ts"

export function renderMessage(messages: Array<string>, style?: string)
{
  const message = randomElement(messages);
  const className = style ? tw(style) : "";

  return (
    <div class={className}>
      {message}
    </div>
  );
}