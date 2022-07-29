/** @jsx h */
import { h } from "preact";

interface ButtonProps
{
  isActive: boolean;
  name: string;
  href: string;
}

export default function MenuButton(props: ButtonProps)
{
  const activity: string = (props.isActive) ? "active" : "";
  const className = `nav-link ${activity}`; 

  return (
    <li class="nav-item">
      <a class={className} href={props.href}>{props.name}</a>
    </li>
  )
}