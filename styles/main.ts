const center = "top-1/2 left-1/2 -translate-1/2";
const centerX = "left-1/2 -translate-x-1/2";
const centerY = "top-1/2 -translate-y-1/2";

export default {
    absoluted: "absolute top-0 left-0",

    center: `absolute ${center}`,
    centerx: `absolute ${centerX}`,
    centery: `absolute ${centerY}`,

    "center-r": `relative ${center}`,
    "centerx-r": `relative ${centerX}`,
    "centery-r": `relative ${centerY}`,

    untruncate: "overflow-visible whitespace-normal",

    button: `rounded-lg bg-gray-800 p-3 m-2`,
    interactive: `bg-gray-800 `,
    'intro-paragraph': `py-3 px-2 text(sm:lg md:3xl lg:5xl) font-bold font-italic inline-block`,
    'intro-header': `text(sm:6xl md:9xl) mb-16`,
    'intro-divider': `w-[40%] h-1 bg-gray-900 m-5`,
    'half-w': `w-[50%]`,
    // 'glass': css`backdrop-filter: blur(10px);`, // guess this isnt working with twind well
}