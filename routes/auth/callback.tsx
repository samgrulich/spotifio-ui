/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps, Handlers } from "$fresh/server.ts";

// export const handler: Handlers = {
//   async GET(req, ctx) {

//   } 
// }

export default function CallbackPage(props: PageProps) {
  const params = new URLSearchParams(props.url.search);
  console.log(params.get("code"));
  console.log(params.get("state"));

  return (
    <div>
      You're in!
      <span>{params.get("code")}</span>
      <span>{params.get("span")}</span>
      <button>Continue</button>
    </div>
  );
}