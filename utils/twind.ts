import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, Configuration, setup } from "twind";
import * as colors from "twind/colors";
import { Main } from "./styles.ts";
export * from "twind";


const IS_SERVER = !IS_BROWSER;
const isDebug = IS_SERVER ? Deno.env.get("IS_DEBUG") == "true" : false;

export const config: Configuration = {
  preflight: {
    h1: apply('font-bold inline'),
    h2: apply('text-2xl'),
    body: apply('text-white bg-black overflow-x-hidden'),
    a: apply('text-green-500 underline'),
    th: apply('text-left p-2'),
    td: apply('text-left p-2'),
    hr: apply('decoration-gray-600'),
    svg: apply('w-8 h-8'),
    ol: apply('list-decimal')
    // // Import external stylesheet
    // '@import': `url('https://fonts.googleapis.com/css2?amily=Roboto:ital,wght@0,400;0,700;1,400&display=swap')`,
    // // Declare font face
    // '@font-face': [
    //   {
    //     fontFamily: 'Proxima Nova',
    //     fontWeight: '400',
    //     src: 'url(/fonts/proxima-nova/400-regular.woff) format("woff")',
    //   },
    //   {
    //     fontFamily: 'Proxima Nova',
    //     fontWeight: '500',
    //     src: 'url(/fonts/proxima-nova/500-medium.woff) format("woff")',
    //   },
    // ],
    // '@import': `url()`,
  },
  mode: isDebug ? "warn" : "silent", // silent, warn, strict
  hash: !isDebug,
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      screens: {
        sm: "300px",
        lg: "1300px",
      }
    }
  },
  darkMode: "class",
  // sheet: voidSheed,
  plugins: {
    ...Main,
  },
};

if (IS_BROWSER) setup(config);
