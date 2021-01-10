import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 8000 });
console.log("http://localhost:8000/");

for await (const req of server) {
    console.log('made request')
    const url = req.url;
    console.log(url)
    req.respond({
        body: `Hello tyautyau56 you visit ${url}`
    })
}