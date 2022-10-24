/** @jsx h */
import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { tw } from "twind";
import { IS_BROWSER } from "$fresh/runtime.ts";


export default function MoveTo(props: {children?: string | preact.JSX.Element | preact.JSX.Element[], targetId: string})
{
  if (!IS_BROWSER)
  {
    return <div>
      {props.children}
    </div>
  }

  const targetElement = window.document.getElementById(props.targetId);
  const target = targetElement?.getBoundingClientRect();
  const targetY = target?.top ?? 0 + (target?.height ?? 0) / 2;
  
  const animate = useCallback(() => {
    window.scrollTo({
      top: targetY, 
      behavior: "smooth"
    });
  }, []);

  return (
    <div onClick={animate} class={tw('cursor-pointer text-underline')}>
      {props.children}
    </div>
  );
}