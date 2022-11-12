import { render } from "preact";
import { useCallback } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

import DateSelection from "./DateSelection.tsx";
import Playlist from "./Playlist.tsx";
import { ISnapshot } from "../modules/api/types.ts";
import { getToday } from "../modules/ui/functions.ts";
import { renderMessage } from "../modules/ui/functions.tsx";


interface DataContent
{
  status: string,
  data?: Array<ISnapshot>
}

async function requestDate(date: string): Promise<DataContent>
{
  const response = await fetch(`/api/date/${date}`);

  switch (response.status) {
    case 200:
      return {status: "success", data: await response.json() as Array<ISnapshot>};
  
    case 206:
      return {status: "no_snaps"};

    default:
      return {status: "err"};
  }

}

function renderPlaylists(playlists: Array<ISnapshot>)
{
  return playlists.map(playlist => renderPlaylist(playlist));
}

const renderSnapMessage = (messages: Array<string>) => renderMessage(messages, "aboslute text-2xl w-[400%]");

function renderNoSnaps()
{
  const messages = [
    "Oh no! I found no playlists.",
    "I think you hadn't been registered yet."
  ]

  return renderSnapMessage(messages);
}

function renderError()
{
  const messages = [
    "This is wrong. I shouldn't be here.",
    "Oi. I got an error back."
  ];

  return renderSnapMessage(messages);
}

function renderPlaylist(snap: ISnapshot)
{
  return (
    <Playlist index={0} id={snap.hash} info={snap}/>
  )
}

function renderContent(content: DataContent)
{
  switch(content.status)
  {
    case "success": 
      return renderPlaylists(content.data ?? []);
    
    case "no_snaps":
      return renderNoSnaps();

    default:
      return renderError();
  }
}

export default function Renderer()
{
  const changeCallback = useCallback(async (renderTarget: HTMLElement, date: string) => {
    const content = await requestDate(date);
    const playlistElements = renderContent(content);

    renderTarget.innerHTML = "";
    render(playlistElements, renderTarget);
  }, []);

  if (IS_BROWSER)
  {
    const renderTarget = document.getElementById("renderTarget");

    if(!renderTarget)
      return (
        <div>
          <DateSelection callback={() => {}}/>
          Render area not found
        </div>
      )

    changeCallback(renderTarget, getToday());
    return (
      <div>
        <DateSelection callback={(date: string) => {changeCallback(renderTarget, date)}}/>
      </div>
    );
  }

  return (
    <div>
      <DateSelection callback={() => {}}/>
    </div>
  );
}