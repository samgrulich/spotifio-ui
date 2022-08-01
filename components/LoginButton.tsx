/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { Credentials } from "../modules/types.ts";
import { dbClient, ExecuteStatementCommand } from "../modules/db/init.ts";

export default function Login({userID}: Credentials)
{
  const isLogged = typeof userID === "string"; 

  if (isLogged)
  {
    return (
      <a class={tw('inline')} href="/auth/connect">Logged</a>
      /**
       * Show
       *  user name
       *  user profile pic
       */
    );
  }  

  return (
    <a class={tw('inline')} href="/auth/connect">Login</a>
  );
}