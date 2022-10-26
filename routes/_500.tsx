/** @jsx h */
import { h } from "preact";
import { ErrorPageProps, Handlers } from "$fresh/server.ts";

export default function ServerError({error} : ErrorPageProps)
{
  return (
    <div>
      <h1>Server error</h1>
      <p>{(error as Error).message}</p>
    </div>
  )
}