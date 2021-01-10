import { Application, Context } from "https://deno.land/x/abc/mod.ts";

const app = new Application()

// static file
app.static('/', './public')

// routes
app.get('/', async (ctx: Context) => {
    await ctx.file('./public/index.html')
})

// listen to port
app.start({
    port: 3000
})