import { IS_BROWSER } from "$fresh/runtime.ts";
import { apply, theme, extend, Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  preflight: {
    h1: apply('font-bold inline'),
    main: apply('p-4 mx-auto max-w-screen-md'),
    body: apply('text-white bg-gray-800'),
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
  hash: true,
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
};

if (IS_BROWSER) setup(config);
