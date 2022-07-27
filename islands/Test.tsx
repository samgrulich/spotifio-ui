/** @jsx h */
import { h } from "preact";
import { useState, useCallback } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";


// export default function Counter() {
//   const [count, setCount] = useState(parseInt(localStorage["x"]));
  
//   if (!count)
//     setCount(10);

//   const click = useCallback(
//     () => {
//       setCount(count + 10);
//       localStorage["x"] = count;
//     }
//   );

//   return (
//     <div>
//       {/* <button onClick={click}>Click me!</button> <br /> */}
//       <span hidden={!IS_BROWSER}>{count}</span>
//     </div>
//   );
// }


interface RedirectProps
{
  path: string;
}

export default function Redirect(props: RedirectProps) {
  if (IS_BROWSER) {
    window.location.href = props.path;
  }

  return (
    <div>
    </div>
  );
}