/** @jsx h */
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { tw } from "twind";


export interface ToggleButtonProps
{ 
  enabled: Element;
  disabled: Element;
}

export default function ToggleButton(props: ToggleButtonProps)
{
  // TODO: add usecallback, when button clicked swap the content rendered
  return (
    <div>
      
    </div>
  )
}