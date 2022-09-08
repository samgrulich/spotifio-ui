import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, theme, Configuration, setup } from "twind";
import { Main } from "./styles.ts";
export * from "twind";

export const config: Configuration = {
  preflight: {
    h1: apply('font-bold inline'),
    main: apply('p-4 mx-auto max-w-screen-md'),
    body: apply('text-white bg-gray-700'),
    a: apply('text-green-500 underline'),
    th: apply('text-left p-2'),
    td: apply('text-left p-2'),
    tr: apply('even:(bg-gray-900)'),
    hr: apply('decoration-gray-600'),
    svg: apply('w-8 h-8'),
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
  },
  mode: "warn", // silent, warn, strict
  hash: false,
  theme: {
    extend:{
      colors:
      {
        primary: "rgba(0, 100, 20, 20)"
      }
    },
  },
  darkMode: "class",
  // sheet: voidSheed,
  plugins: Main,
};

if (IS_BROWSER) setup(config);
