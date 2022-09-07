/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";

export default function Login()
{
  return (
    <div>
      <a href="/app">Home</a>
      <div class={tw("centered")}>
        <h1>Login</h1>
        <div>
          <h2>Username</h2>
          <input type="text" name="username" id="username" /> 
        </div>
        <div>
          <h2>Password</h2>
          <input type="password" name="password" id="password" /> 
        </div>
        <a href="/auth/register" class={tw(`float-right underline m-2`)}>Register</a> <br />
        <input type="submit" value="Login" class={tw(`button relative left-1/2 transform -translate-x-1/2`)} />
      </div>
    </div>
  )
}
