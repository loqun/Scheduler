const esbuild = require("esbuild");
const {sassPlugin} = require("esbuild-sass-plugin");


async function watch() {

    let ctx = await esbuild.context({
        entryPoints: ["frontend/Application.tsx"],
        outdir: "public/assets",
        bundle: true,
        minify:true,
        plugins: [sassPlugin()],
    })
    await ctx.watch();
    console.log("watching...")
    
}

watch()
