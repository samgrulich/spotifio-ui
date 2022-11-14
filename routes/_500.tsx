import { ErrorPageProps, Handlers } from "$fresh/server.ts";


export default function ServerError({error} : ErrorPageProps)
{
  const errText = (error as Error).message;

  if (!errText.includes('"reason"'))
    return (
      <div class="w-1/2 h-1/2 center">
        <h1 class="centerx text-2xl">Server error</h1>
        <p class="relative top-4">{errText}</p>
      </div>
    );
 
  const err = JSON.parse(errText);
  const contents = (err.contents as Array<string>).map((content) => <p class="w-full text-center">{content}</p>);
  return (
    <div class="w-screen h-screen">
      <h1 class="text-4xl absolute left-1/3 top-1/3">Error!</h1>
      <div class="center-r top-1/3 w-1/2">
        <div>
          <p class="w-full text-center">Reason - {err.reason}</p>
          {contents}
        </div>
      </div>
      <div class="absolute bottom-0 right-0 -translate-1/2">
        {new Date().toLocaleString()}
      </div>
   </div>
  )
}