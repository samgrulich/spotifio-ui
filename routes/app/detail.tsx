/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import Track from "../../islands/track.tsx";

export default function Detail()
{
  return (
    <div class={tw(`p-10`)}>
      <table class={tw(`w-full p-5 rounded-lg table-auto`)}>
        <thead> 
          <th>Cover <hr /></th>
          <th>Title <hr /></th>
          <th>Other <hr /></th>
        </thead>
        <tbody>
          <Track/>
          <Track/>
          <Track/>
          <Track/>
        </tbody>
      </table>
      {
        /**
         * foreach track in playlist:
         *  load track
         */
      } 
    </div>
  )

}