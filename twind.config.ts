import { Options } from "$fresh/plugins/twind.ts";
import {styles} from "./styles/config.ts";

import { apply } from "twind";
import * as colors from "twind/colors";

import { IS_BROWSER } from "$fresh/runtime.ts";


const IS_SERVER = !IS_BROWSER;
const isDebug = IS_SERVER ? Deno.env.get("IS_DEBUG") == "true" : false;

export default {
  selfURL: import.meta.url,
  preflight: {
    h1: apply('font-bold inline'),
    h2: apply('text-2xl'),
    body: apply('text-white bg-black overflow-x-hidden font-sans'),
    a: apply('text-green-500 underline'),
    th: apply('text-left p-2'),
    td: apply('text-left p-2'),
    hr: apply('decoration-gray-600'),
    svg: apply('w-8 h-8'),
    ol: apply('list-decimal'),
  },
  hash: !isDebug,
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      screens: {
        sm: "300px",
        lg: "1300px",
      },
      spacing: {
        0.8: "80%",
      }
    }
  },
  darkMode: "class",
  plugins: {
    ...styles
  },
} as Options;