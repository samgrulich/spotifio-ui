import * as colors from "twind/colors";


const bannedColors = ["white", "black"];

export function randomColor(fallbackColor="amber")
{
  const colorIds = Object.keys(colors);
  const colorIndex = Math.floor(Math.random() * colorIds.length);
  const color = colorIds[colorIndex];

  if (bannedColors.includes(color))
    return fallbackColor;
  
  return color;
}

export function randomElement(selection: Array<any>)
{
  const index = Math.floor(Math.random() * selection.length);
  return selection[index];
}

export function randomElementWeiged(selection: Record<string, number>)
{
  const weighedSelection = Object.entries(selection)
    .map(([selection, weight]) => 
    Array.from(Array(weight).keys())
      .map(_ => selection))
  .flat();

  const index = Math.floor(Math.random() * weighedSelection.length);
  return weighedSelection[index];
}