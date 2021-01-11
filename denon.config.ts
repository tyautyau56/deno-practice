import { DenonConfig } from "https://deno.land/x/denon/mod.ts";

const config: DenonConfig = {
    scripts: {
        dev: "deno run --allow-net --allow-read --allow-write api/app.ts",
    },
};

export default config;