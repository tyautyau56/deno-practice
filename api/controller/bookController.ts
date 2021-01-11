import { Application, Context } from "https://deno.land/x/abc/mod.ts"
import { Book } from "../models/bookModel.ts"
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

let books: Book[] = [
    {id: '1', title: 'about', author: 'tyautyau', pages: 87},
    {id: '2', title: 'watch', author: 'tyautyau46', pages: 90},
    {id: '3', title: 'rokuro', author: 'tyautyau66', pages: 100}
]

export const get_all_books = (ctx: Context) => {
    return ctx.json(books, 200)
}

export const get_book = (ctx: Context) => {
    const { id } = ctx.params
    const book = books.find((b: Book) => b.id === id)
    if (book) {
        return ctx.json(book, 200)
    }
    return ctx.string('not found', 404)
}

export const create_book = async (ctx: Context) => {
    const {title, author, pages} = await ctx.body()

    // validata data & type of data
    const id = v4.generate( )
    const book = { id, title, author, pages}
    books.push(book)

    return ctx.json(book, 201)
}

export const delete_book = (ctx: Context) => {
    const { id } = ctx.params
    const book = books.find((b: Book) => b.id === id)
    if (book) {
        books = books.filter((b: Book) => b.id !== id)
        return ctx.json(book, 200)
    }
    return ctx.string('no book with that id', 404)
}