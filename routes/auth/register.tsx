/** @jsx h */
import { h } from "preact";
import { tw, apply } from "@twind";

export default function Login()
{
  return (
    <div>
			<a href="/app">Home</a>
      <div class={tw("centered")}>
        <h1>Register</h1>
        <div>
          <h2>Username</h2>
          <input type="text" name="username" id="username" /> 
        </div>
        <div>
          <h2>Password</h2>
          <input type="password" name="password" id="password" /> 
        </div>
    		<div>
          <h2>Password Check</h2>
          <input type="password" name="passwordCheck" id="passwordCheck" /> 
        </div>
				<a href="/auth/login" class={tw(`float-right underline m-2`)}>Login</a> <br />
        <input type="submit" value="Register" class={tw(`button relative left-1/2 transform -translate-x-1/2`)} />
      </div>
    </div>
  )
}
