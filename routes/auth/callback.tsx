/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { PageProps } from "$fresh/server.ts";

export default function CallbackPage(props: PageProps) {
  const params = new URLSearchParams(props.url.search);
  console.log(params.get("code"));
  console.log(params.get("state"));
  
  return (
    <div>
      You're in!
    </div>
  );
}