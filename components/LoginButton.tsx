/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { Credentials } from "../modules/types.ts";
import { dbClient, ExecuteStatementCommand } from "../modules/db/init.ts";

export default function Login(props: Credentials)
{
  const isLogged = true; 


  if (isLogged)
    return (
      <a class={tw('inline')} href="/auth/connect">Login</a>
    );
}