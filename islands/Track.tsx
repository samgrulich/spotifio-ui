/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

export default function Track()
{
  return (
    <tr class={tw(`odd:bg-gray-800`)}> 
      <td class={tw(`w-4 h-8`)} ><img class={tw(`w-4 h-8`)} src="" alt="Cover" /></td>
      <td>Track name</td> 
      <td>Other info</td>
    </tr>
  )
}