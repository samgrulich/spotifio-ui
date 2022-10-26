/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="It's a web app, helping you with a spotify playlist version controll"/>
        <title>Spotifio - app</title>
      </Head>
      <props.Component />
    </>
  );
}