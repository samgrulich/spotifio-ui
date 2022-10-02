/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function InfoMessage(props: {msg: string})
{
  return (
    <div>
      {props.msg}
    </div>
  )
}