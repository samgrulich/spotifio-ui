/** @jsx h */

import { h } from "preact";
import { tw } from "@twind";
import { LoginData } from "../modules/credentials.ts";


export default function Login(loginData: LoginData)
{
  if (loginData.isLogged)
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