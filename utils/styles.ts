const center = "top-1/2 left-1/2 -translate-1/2`";
const centerX = "left-1/2 -translate-x-1/2";
const centerY = "top-1/2 -translate-y-1/2";

export const Main = {
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

export const HomeStyles = {
    title: `font-italic font-bold text(gray-300 md:4xl sm:xl)`,
    background: `bg-gray-800`,
    'button-home': `rounded-full bg-green-700 px-5 py-2 font-bold hover:(scale-[1.05]) active:(scale-[0.98]) transition-all`,

    'section': `w-screen`,
    'section-home-intro': `
        p-6 py-24 my(10 md:0) lg:w-3/4 md:h-[400px]
        flex items-center justify-around
        md:(relative left-1/2 -translate-x-1/2)
        flex(wrap lg:nowrap)
        space-y(10 md:0)
    `,
    'section-text': `text-2xl md:w-1/3`,
    'section-header': `text-3xl font-bold`,

    'divider-home-main': `bg-gray-700 w-full h-2`,
    'divider-home': `bg-black w-full h-2`,
}