import { Application, Context } from "https://deno.land/x/abc/mod.ts";
import {get_all_books, create_book, delete_book, get_book} from "./controller/bookController.ts";

const app = new Application()

// static file
app.static('/', './public')

// routes
app.get('/', async (ctx: Context) => {
    await ctx.file('./public/index.html')
})

app
    .get('/book', get_all_books)
    .get('/books/:id',get_book)
    .post('/books', create_book)
    .delete('/books/:id', delete_book)

// listen to port
app.start({
    port: 3000
})