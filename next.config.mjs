import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = paraglide({
    paraglide: {
        
        project: "./project.inlang", 
        outdir: "./src/paraglide",
    },

    // ... rest of your next config
})

export default nextConfig;
