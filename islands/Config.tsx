/** @jsx h */
import { h } from "preact";

interface Data 
{
  title: string;
}

export default function Config(props: Data) {
  return (
    <head>
      <title>{props.title || "Spotifio"}</title>
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" 
        crossorigin="anonymous"
      />
    </head>
  );
}