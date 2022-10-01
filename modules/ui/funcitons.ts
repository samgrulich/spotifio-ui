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