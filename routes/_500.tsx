import { ErrorPageProps, Handlers } from "$fresh/server.ts";

export default function ServerError({error} : ErrorPageProps)
{
  return (
    <div class="w-1/2 h-1/2 center">
      <h1 class="centerx text-2xl">Server error</h1>
      <p class="relative top-4">{(error as Error).message}</p>
    </div>
  )
}