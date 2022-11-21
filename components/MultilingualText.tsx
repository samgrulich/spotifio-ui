import { JSX } from "preact";

export enum Languages {
  en="en",
  cs="cs"
}
  
/**
 * Return text by selected language 
 * @param props 
 * @returns 
 */
export default function Text(props: {
  id: string,
  config: {
    lang: Languages, 
    options: Record<string, Record<string, any>>
  }
  children?: string | JSX.Element | JSX.Element[]
}) {
  const content = props.config.options[props.config.lang][props.id] 
    ?? props.children 
    ?? " - ";

  return (
    <>
      <span lang={props.config.lang}>
        {content}      
      </span>
    </>
  )
}