import { JSX } from "preact";
import { StateUpdater, useCallback, useState } from "preact/hooks";
import { tw } from "twind";

export default function Button(props: {
  onClick: () => void, 
  enabled: preact.JSX.Element, 
  disabled: preact.JSX.Element,  
  active?: boolean,
  tw?: string, children?: preact.JSX.Element | string
})
{
  const [active, setActive] = useState(false);
  const toggle = useCallback(() => {
    props.onClick();

    setActive(!active);
  }, [active])
  const renderElem = useCallback(() => {
    if (active)
      return props.enabled;
    else
      return props.disabled;
  }, [active, props.active]);

  return (
    <button onClick={toggle} class={tw(props.tw)}>
      {renderElem()}
      {props.children}
    </button>
  )
}