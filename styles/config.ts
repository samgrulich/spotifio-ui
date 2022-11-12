// async function getModule(name: string)
// {
//     const path = `./${name}.ts`;
//     // const module = await import(path);
//     const contents = Object.values(module)[0] as Record<string, string>;

//     return contents;
// }

// export const styles = {
//     ...await getModule("main"),
//     ...await getModule("home"),
// }

import Main from "./main.ts";
import Home from "./home.ts";

export const styles = {
   ...Main,
   ...Home 
}