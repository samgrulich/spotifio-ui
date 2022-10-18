/** @jsx h */
import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { tw } from "twind";


export default function MoveTo(props: {children?: string | preact.JSX.Element | preact.JSX.Element[], targetId: string})
{
  const animate = useCallback(() => {
    const targetElement = window.document.getElementById(props.targetId);
    const target = targetElement?.getBoundingClientRect();
    const targetY = target?.top ?? 0 + (target?.y ?? 0) / 2;

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