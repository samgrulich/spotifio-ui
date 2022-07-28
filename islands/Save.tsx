/** @jsx h */
import { h } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export enum StorageType {
  Session = "s",
  Local = "l"
}

interface SaveProps {
  storage: StorageType;
  data: Record<string, string>;
}

export default function Save(props: SaveProps)
{
  if (!IS_BROWSER)
    return(<div hidden={true}>Server rendered content</div>);

  for (const [key, value] of Object.entries(props.data))
  {
    if (props.storage == StorageType.Session)
      sessionStorage.setItem(key, value);
    else 
      localStorage.setItem(key, value);
  }

  return (<div hidden={true}></div>);
}