import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = paraglide({
    paraglide: {
        //recommended setup
        project: "./project.inlang", //the path to the Inlang project
        outdir: "./src/paraglide", // where you want the generated files to go
    },

    // ... rest of your next config
})

export default nextConfig;
