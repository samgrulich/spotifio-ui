/** @jsx h */
import { h } from "preact";
import { ErrorPageProps } from "$fresh/server.ts";

export default function ServerError({error} : ErrorPageProps)
{
  return (
    <div>
      <h1>Server error</h1>
      <p>{(error as Error).message}</p>
    </div>
  )
}